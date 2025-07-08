import React, { useState, useEffect } from 'react';
import '../Pokemon.css';
import SearchBar from './SearchBar';
import PokemonCard from './PokemonCard';
import SearchHistory from './SearchHistory';

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedType, setSelectedType] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allPokemonNames, setAllPokemonNames] = useState([]);
  // const [isCompare, setIsCompare] = useState(false);
  // const [compareData, setCompareData] = useState(null);
  useEffect(() => {
    const fetchAllPokemonNames = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1300');
        const data = await response.json();
        setAllPokemonNames(data.results.map(p => p.name));
      } catch (error) {
        console.error("Failed to fetch Pokémon names:", error);
      }
    };

    fetchAllPokemonNames();
  }, []);

  useEffect(() => {
    if (pokemonName.length > 0 && allPokemonNames.length > 0) {
      const filtered = allPokemonNames.filter(name =>
        name.toLowerCase().startsWith(pokemonName.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [pokemonName, allPokemonNames]);

  const parseEvolutionChain = (chain) => {
    const evolutionChain = [];
    let currentEvolution = chain;

    while (currentEvolution) {
      evolutionChain.push({
        pokemon: currentEvolution.species.name,
        evolutionDetails: currentEvolution.evolution_details?.[0] || {},
      });

      currentEvolution = currentEvolution.evolves_to?.[0];
    }

    return evolutionChain;
  };

  const fetchPokemon = async (nameOrId) => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`);
      if (!res.ok) throw new Error("Pokemon not found");
      const data = await res.json();
      const pokemon = {
        name: data.name,
        id: data.id,
        image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
        type: data.types.map(t => t.type.name).join(', '),
        abilities: data.abilities.map(a => a.ability.name).join(', '),
        stats: data.stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat
        }))
      };

      const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}`);
      const speciesData = await speciesRes.json();

      const evolutionChainRes = await fetch(speciesData.evolution_chain.url);
      const evolutionChainData = await evolutionChainRes.json();

      const evolutionChain = parseEvolutionChain(evolutionChainData.chain);

      setPokemonData({
        ...pokemon,
        evolutionChain: evolutionChain
      });

      setError('');
      setIsFlipped(false);
      // setIsCompare(false);
      setShowSuggestions(false);

      setSearchHistory(prev => {
        const newHistory = [pokemon, ...prev.filter(p => p.id !== pokemon.id)];
        return newHistory.slice(0, 5);
      });
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
      setError('Pokémon not found. Try again!');
      setPokemonData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (name) => {
    setPokemonName(name);
    setShowSuggestions(false);
    fetchPokemon(name);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pokemonName.trim()) return;

    fetchPokemon(pokemonName);
  };

  const randomSearch = async () => {
    setIsLoading(true);
    try {
      const id = Math.floor(Math.random() * 1025) + 1;
      await fetchPokemon(id.toString());
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
      setError('Error finding random Pokémon');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const loadFromHistory = (pokemon) => {
    setPokemonData(pokemon);
    setIsFlipped(false);
  };
  const handleEvolutionClick = (pokemonName) => {
    fetchPokemon(pokemonName);
  };
  // const handleCompare = () => {
  //   setCompareData(pokemonData); // Save the current Pokémon to compare against
  //   setPokemonData(null); // Clear the current Pokémon to search for a new one
  // };

  // const resetCompare = () => {
  //   setCompareData(null);
  // };
  return (
    <div className="pokemon-app">
      <div className="app-header">
        <h1 className="app-title">
          <span className="title-icon">⚡</span>
          Pokémon Finder
          <span className="title-icon">⚡</span>
        </h1>
        <p className="app-subtitle">Discover your favorite Pokémon!</p>
      </div>

      <SearchBar
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        handleSearch={handleSearch}
        randomSearch={randomSearch}
        isLoading={isLoading}
        suggestions={suggestions}
        showSuggestions={showSuggestions}
        handleSuggestionClick={handleSuggestionClick}
      />

      {error && <div className="error-message">{error}</div>}

      {pokemonData && (
        <div className="pokemon-display">
          <PokemonCard
            pokemonData={pokemonData}
            isFlipped={isFlipped}
            toggleCardFlip={toggleCardFlip}
            fetchPokemon={fetchPokemon} 
            handleEvolutionClick={handleEvolutionClick} // Passing handler here
          />
          <div className="action-buttons">
         <button className="compare-button" onClick={toggleCardFlip} >
              {isFlipped ? 'Show Card' : 'Show Image'}
            </button>
            <button onClick={() => {
              setPokemonData(null);
              setPokemonName('');
            }} className="new-search-button">
              New Search
             
            </button>
          </div>
        </div>
      )}

{/* {compareData && (
        <div className="compare-section">
          <h2>Compare Pokémon</h2>
          <div className="pokemon-comparison">
            <PokemonCard
              pokemonData={pokemonData}
              isFlipped={isFlipped}
              toggleCardFlip={toggleCardFlip}
            />
            <div className="comparison-vs">VS</div>
            <PokemonCard
              pokemonData={compareData}
              isFlipped={isFlipped}
              toggleCardFlip={toggleCardFlip}
            />
          </div>
          <button onClick={resetCompare} className="reset-compare-button">
            Reset Comparison
          </button>
        </div>
      )} */}
      {searchHistory.length > 0 && (
        <SearchHistory
          searchHistory={searchHistory}
          loadFromHistory={loadFromHistory}
        />
     
      )}
    </div>
  );
};

export default PokemonSearch;

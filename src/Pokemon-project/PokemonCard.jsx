import React from 'react';
import PokemonStats from './PokemonStats';

const PokemonCard = ({ pokemonData, isFlipped, toggleCardFlip,handleEvolutionClick }) => {
  return (
    <div className={`pokemon-card ${isFlipped ? 'flipped' : ''} ${pokemonData.type.split(', ')[0]}`}
      onClick={(e) => {
        e.stopPropagation();
        toggleCardFlip();
      }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="pokemon-image-container">
            <img src={pokemonData.image} alt={pokemonData.name} className="pokemon-image" />
            <div className="pokemon-id">#{pokemonData.id.toString().padStart(3, '0')}</div>
          </div>
          <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemonData.name}</h2>
            {console.log("Fetched Pokemon:",pokemonData)}
            <div className="pokemon-types">
              {pokemonData.type.split(', ').map((type, i) => (
                <span key={i} className={`type-badge ${type}`}>{type}</span>
              ))}
            </div>
            <div className="pokemon-abilities">
              <p><strong>Abilities:</strong> {pokemonData.abilities}</p>
            </div>
          </div>
    
          {pokemonData.evolutionChain && pokemonData.evolutionChain.length > 0 && (
            <div className="pokemon-evolution-chain">
              <h3>Evolution Chain:</h3>
                {pokemonData.evolutionChain.map((evolution, index) => (
                  <p className="chain-name" key={index}>
                    <span
  className="clickable-pokemon-name"
  onClick={(e) => {
    e.stopPropagation(); // Prevent card click
    handleEvolutionClick(evolution.pokemon); // Trigger fetchPokemon with evolution name
  }}
>
{evolution.pokemon} {index < pokemonData.evolutionChain.length - 1 && ' -> '}
</span>
                  </p>
                ))}
            </div>
          )}
          <PokemonStats stats={pokemonData.stats} />
        </div>
        <div className="card-back">
          <img src={pokemonData.image} alt={pokemonData.name} className="pokemon-image-back" />
          <div className="pokemon-name-back">{pokemonData.name}</div>
          <div className="flip-hint">Click to flip back</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

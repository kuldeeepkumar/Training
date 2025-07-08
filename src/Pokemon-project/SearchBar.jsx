import React from 'react';
// import "Pokemon.css";
const SearchBar = ({
  pokemonName,
  setPokemonName,
  selectedType,
  setSelectedType,
  handleSearch,
  randomSearch,
  isLoading,
  suggestions,
  showSuggestions,
  handleSuggestionClick
  
}) => {
  return (
     <div className="all-input-container">
    <form onSubmit={handleSearch} className="search-container">
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter Pokémon name..."
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="search-input"
          autoFocus
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="type-filter"
        >
          <option value="All">All Types</option>
          {[
            "normal", "fire", "water", "electric", "grass", "ice",
            "fighting", "poison", "ground", "flying", "psychic",
            "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"
          ].map(type => <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>)}
        </select>
      </div>

      <div className="button-group">
        <button type="submit" className="search-button" disabled={isLoading}>
          {isLoading ? <span className="loading-dots">...</span> : 'Search'}
        </button>
        <button type="button" className="random-button" onClick={randomSearch} disabled={isLoading}>
          {isLoading ? <span className="loading-dots">...</span> : 'Random'}
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
          <div className="suggestion-container">
            {suggestions.map((name, index) => (
              <p key={index} onClick={() => handleSuggestionClick(name)} className="suggestion-item"><span className="search-icon">🔍︎</span>
               <span className="suggestion-text">{name}</span> 
              </p>
            ))}
          </div>
        )}
    </form>
    </div>
  );
};

export default SearchBar;

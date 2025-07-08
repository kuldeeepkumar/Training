import React from 'react';
// import "Pokemon.css";
const SearchHistory = ({ searchHistory, loadFromHistory }) => {
  return (
    <div className="search-history">
      <h3>Recent Searches:</h3>
      <div className="history-items">
        {searchHistory.map(pokemon => (
          <div
            key={pokemon.id}
            className="history-item"
            onClick={() => loadFromHistory(pokemon)}
          >
            <img src={pokemon.image} alt={pokemon.name} />
            <span>#{pokemon.id.toString().padStart(3, '0')} {pokemon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;

import React from 'react';
// import "Pokemon.css";
const PokemonStats = ({ stats }) => {
  return (
    <div className="pokemon-stats">
      {stats.map((stat, index) => {
        const powerLevel =
          stat.value <= 30 ? 'Weak' :
          stat.value <= 70 ? 'Average' :
          stat.value <= 100 ? 'Strong' : 'Powerful';

        return (
          <div key={index} className="stat-row">
            <div className="stat-info">
              <span className="stat-name">{stat.name.replace('-', ' ')}:</span>
              <span className="stat-value">{stat.value}</span>
            </div>
            <div className="stat-bar-container">
              <div className="stat-bar" style={{ width: `${Math.min(100, stat.value)}%` }}></div>
            </div>
            <span className="stat-power">{powerLevel}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonStats;

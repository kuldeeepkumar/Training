import React from 'react'
import Captain from "./Avengers-images/captain.jpg";
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={Captain} alt="Captain America image" />
      <h2 className="card-title">Captain America</h2>
      <p className="card-about">
        I can do this all day.
      </p>
    </div>
  );
}

export default Card

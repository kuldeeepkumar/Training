import React from 'react'
import IronMan from "./Avengers-images/ironman.jpg";
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={IronMan} alt="Batman image" />
      <h2 className="card-title">Iron Man</h2>
      <p className="card-about">Heroes aren't born. They're built.</p>
    </div>
  );
}

export default Card
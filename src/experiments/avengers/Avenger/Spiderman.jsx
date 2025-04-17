import React from 'react'
import Spiderman from "./Avengers-images/spiderman.jpg";
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={Spiderman} alt="Batman image" />
      <h2 className="card-title">Spiderman</h2>
      <p className="card-about">With great power, comes great responsibility</p>
    </div>
  );
}

export default Card

import React from 'react'
import Thor from "./Avengers-images/thor.jpg";
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={Thor} alt="Thor image" />
      <h2 className="card-title">Thor</h2>
      <p className="card-about">
        Whosoever holds this hammer, if he be worthy, shall possess the power of
        Thor
      </p>
    </div>
  );
}

export default Card

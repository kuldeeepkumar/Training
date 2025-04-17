import React from "react";
import Hulk from "./Avengers-images/hulk.jpg";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={Hulk} alt="Hulk image" />
      <h2 className="card-title">Hulk</h2>
      <p className="card-about">I'm always angry</p>
    </div>
  );
};

export default Card;

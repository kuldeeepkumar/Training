import React from "react";
import Batman from "./Avengers-images/batman.jpg";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={Batman} alt="Batman image" />
      <h2 className="card-title">Batman</h2>
      <p className="card-about">
        It's not who I am underneath, but what I do that defines me.
      </p>
    </div>
  );
};

export default Card;

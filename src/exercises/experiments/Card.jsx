import React from 'react'
import Batman from "./batman.jpg"
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={Batman} alt="Batman image" />
      <h2 className='card-title'>I'm Batman</h2>
      <p className='card-about'>I am vengeance, I am the night, I am Batman</p>
    </div>
  );
}

export default Card

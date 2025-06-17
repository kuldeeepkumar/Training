import React from 'react'

const DefaultParameters = () => {

    
  // defaultParameters.js

  function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }

  // Example calls
  greet(); // Hello, Guest
  greet("jass"); // Hello, jass

  return <div>DefaultParameters</div>;
};



export default DefaultParameters
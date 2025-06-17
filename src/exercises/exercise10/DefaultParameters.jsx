import React from 'react'

const DefaultParameters = () => {

   
    
  // defaultParameters.js

  function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }

  // Example calls
  greet(); // Hello, Guest
  greet("sheetal"); // Hello, sheetal

  return <div>DefaultParameters</div>;
};
  


export default DefaultParameters
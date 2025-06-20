import React from "react";
const DefaultParameters = () => {
  // defaultParameters.js

  function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }

  // Example calls
  greet(); // Hello, Guest
  greet("Anjali"); // Hello, Anjali

  return <div>DefaultParameters</div>;
};

export default DefaultParameters;
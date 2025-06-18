import React from "react";
const DefaultParameters = () => {
  // defaultParameters.js

  function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }

  // Example calls
  greet(); // Hello, GuestAdd commentMore actions
  greet("Anjali"); // Hello, Anjali

  return <div>DefaultParameters</div>;
};
export default DefaultParameters;

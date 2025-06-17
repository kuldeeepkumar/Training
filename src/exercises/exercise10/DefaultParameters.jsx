import React from "react";

const DefaultParameters = () => {
  function greet(name = "Guest") {
    console.log(`Hello ,${name}`);
  }
  greet();
  greet("Anjali");
  return <div>DefaultParameters</div>;
};

export default DefaultParameters;

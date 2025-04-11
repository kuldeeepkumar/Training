import React from "react";

const Variables = () => {
  let name = "Ripan"; // Variable declared using let
  const age = 20; // Constant variable declared using const
  name = "deep"; // You can reassign 'name' since it was declared with 'let'
  // age = 21;          // Error: Assignment to constant variable

  console.log(age);
  console;
  return (
    <div>
      <h1>Variables</h1>
    </div>
  );
};

export default Variables;

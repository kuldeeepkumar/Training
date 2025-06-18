import React from "react";

const Variables = () => {
  let name = "Akash"; // Variable declared using let
  const age = 19; // Constant variable declared using const
  name = "kash"; // You can reassign 'name' since it was declared with 'let'
  // age = 20;          // Error: Assignment to constant variable

  console.log(age);
  console
  return (
    <div>
      <p>Variables</p>
    </div>
  );
};

export default Variables;

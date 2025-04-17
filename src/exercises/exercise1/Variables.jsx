import React from "react";

const Variables = () => {
  let name = "mehak"; // Variable declared using let
  const age = 19; // Constant variable declared using const
  name = "mehak"; // You can reassign 'name' since it was declared with 'let'
  // age = 20;          // Error: Assignment to constant variable

  console.log(age);
  console
  return (
    <div>
      <h1>Variables</h1>
    </div>
  );
};

export default Variables;







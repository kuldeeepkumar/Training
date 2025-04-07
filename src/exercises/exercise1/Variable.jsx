import React from "react";

const Variable = () => {
  // follwing code is representing veriables

  let name = "Alice"; // Variable declared using let
  const age = 25; // Constant variable declared using const
  console.log(name);
  console.log(age);
  name = "Bob"; // You can reassign 'name' since it was declared with 'let'
  // age = 26;          // Error: Assignment to constant variable

  return <div>Variable</div>;
};

export default Variable;

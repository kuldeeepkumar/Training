import React from "react";

// Templete Literals
const TemplateLeterals = () => {
  const name = "Alice";
  const age = 25;

  const message = `Hello, my name is ${name} and I am ${age} years old.`;
  console.log(message);

//   Multiple Lines
  const multiLine = `This is line one
This is line two
This is line three`;
  console.log(multiLine);

  return (
    <>
  <div>TemplateLeterals</div>
  </>
  )
  
};

export default TemplateLeterals;
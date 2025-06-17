import React from "react";

const TemplateLiterals = () => {
  const name = "Baljit";
  const age = 25;

  const message = `hello , my name is ${name} and I am ${age} years old.`;
  console.log(message);

  const multiline = `This is line one 
    This is line two
    This is line three`;
  console.log(multiline);
  return <div>TemplateLiterals</div>;
};

export default TemplateLiterals;

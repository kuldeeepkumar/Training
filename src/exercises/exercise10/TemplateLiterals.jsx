import React from 'react'

const TemplateLiterals = () => {

   
  const name = "Jaspreet";
  const age = 21;

  const message = `Hello, my name is ${name} and I am ${age} years old.`;
  console.log(message);

  const multiLine = `This is line one
This is line two
This is line three`;
  console.log(multiLine);
  return <div>TemplateLeterals</div>;
};
  

export default TemplateLiterals
import React from 'react'

const DestructingExamples = () => {

    
  //==================================================
  //Destructuring Assignment Example for object
  //==================================================

  const user = {
    name: "sheetal",
    age: 20,
    country: "India",
  };

  const { name, age, country } = user;

  console.log(name); // sheetal
  console.log(age); // 20
  console.log(country); // India

  //==================================================
  //Destructuring Assignment Example for Array
  //==================================================

  const colors = ["red", "green", "blue"];

  const [first, second, third] = colors;

  console.log(first); // red
  console.log(second); // green
  console.log(third); // blue

  return <div>DestructuringExamples</div>;
};


export default DestructingExamples
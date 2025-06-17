import React from "react";

const DestructuringExamples = () => {
  //==================================================
  //Destructuring Assignment Example for object
  //==================================================

  const user = {
    name: "simran",
    age: 30,
    country: "India",
  };

  const { name, age, country } = user;

  console.log(name); // simran
  console.log(age); // 30
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

export default DestructuringExamples;

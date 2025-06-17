import React from "react";

const DestructuringExamples = () => {
  //==================================================
  //Destructuring Assignment Example for object
  //==================================================

  const user = {
    name: "john",
    age: 40,
    country: "India",
  };

  const { name, age, country } = user;

  console.log(name);
  console.log(age);
  console.log(country);

  //==================================================
  //Destructuring Assignment Example for Array
  //==================================================

  const colors = ["red", "green", "blue"];

  const [first, second, third] = colors;

  console.log(first);
  console.log(second);
  console.log(third);

  return <div>DestructuringExamples</div>;
};

export default DestructuringExamples;

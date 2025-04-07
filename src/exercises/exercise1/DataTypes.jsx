import React from "react";

const DataTypes = () => {
  // Data types
  // String
  let yourName = "Kuldeep";
  let greeting = "Hello";
  let sentence = `My name is ${yourName}`; // Template literals

  console.log(sentence);

  //  Number

  let age = 30;
  let price = 19.99;

  // boolean
  let isStudent = true;
  let isTeacher = false;

  // Object
  let person = {
    name: "Alice",
    age: 30,
  };

  // Array
  let fruits = ["apple", "banana", "cherry"];

  // undefined
  let car;
  console.log(car); // Output: undefined

  // null
  let nothing = null;

  return <div>DataTypes</div>;
};

export default DataTypes;

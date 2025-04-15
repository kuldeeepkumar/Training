import React from "react";

const Datatypes = () => {
  let yourName = "Kuldeep";
  let greeting = "Hello";
  let sentence = `${greeting} My name is ${yourName}`; // Template literals

  console.log(sentence);

  //  Number

  let age = 30;
  let price = 19.99;
  console.log(age);
  console.log(price);

  // boolean
  let isStudent = true;
  let isTeacher = false;
  console.log(isStudent);
  console.log(isTeacher);

  // Object
  let person = {
    name: "Alice",
    age: 30,
  };
  console.log(person);

  // Array
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits);


  // undefined
  let car;
  console.log(car); // Output: undefined

  // null
  let nothing = null;
  console.log(nothing);
  return (
    <div>
      <h1>Datatypes</h1>
    </div>
  );
};

export default Datatypes;

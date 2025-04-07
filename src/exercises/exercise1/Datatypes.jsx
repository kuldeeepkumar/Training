import React from 'react'

const Datatypes = () => {

    // Data types
  // String
  let yourName = "Akash";
  let greeting = "Hello";
  let sentence = `${greeting} My name is ${yourName}`; // Template literals

  console.log( sentence)

  //  Number

  let age = 30;
  let price = 19.99;
  console.log("age is:",age)
  console.log("price is:",price)
  // boolean
  let isStudent = true;
  let isTeacher = false;
  console.log("isStudent is:",isStudent)
  console.log("isTeacher is:",isTeacher)
  // Object
  let person = {
    name: "Alice",
    age: 30,
  }
  console.log("person is:",person);
  // Array
  let fruits = ["apple", "banana", "cherry"];
  console.log("fruits is:",fruits);

  // undefined
  let car;
  console.log("car is:",car); // Output: undefined

  // null
  let nothing = null;
  console.log("nothing is:",nothing);
  return (
    <div>Datatypes</div>
  )
}

export default Datatypes
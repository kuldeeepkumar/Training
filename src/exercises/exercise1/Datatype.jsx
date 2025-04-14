import React from 'react'

const Datatype = () => {


    // Data types
  // String
  let yourName = "priya";
  let greeting = "Hello";
  let sentence = `My name is ${yourName}`; // Template literals

  console.log(yourName)
  console.log(greeting)
  console.log( sentence)


  //  Number

  let age = 21;
  let price = 89.99;
  console.log(age)
  console.log(price)


  // boolean
  let isStudent = true;
  let isTeacher = false;
  console.log(isStudent)
  console.log(isTeacher)


  // Object
  let person = {
    name: "Alice",
    age: 30,
  };
   
  console.log(person)

  // Array
  let fruits = ["apple", "banana", "cherry"];
  console.log(fruits)

  // undefined
  let car;
  console.log(car); // Output: undefined

  // null
  let nothing = null;
  console.log(nothing)
  return (
   <><div>
   <h1>Datatypes</h1>   
    </div></> 
  )
}

export default Datatype

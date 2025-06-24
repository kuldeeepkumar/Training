import React from 'react'

const Datatypes = () => {
     let yourName = "Kuldeep";
     let greeting = "Hello";
     let sentence = `${greeting} My name is ${yourName}`; // Template literals

     console.log(sentence);

     //  Number

     let age = 20;
     let price = 19.99;

     // boolean
     let isStudent = true;
     let isTeacher = false;

     // Object
     let person = {
       name: "Arash",
       age: 30,
     };

     // Array
     let fruits = ["apple", "banana", "cherry"];

     // undefined
     let car;
     console.log(car); // Output: undefined

     // null
     let nothing = null;
  return (
    <div>
      <p>Datatypes</p>
    </div>
  )
}

export default Datatypes

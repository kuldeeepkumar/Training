import React from 'react'

const arr = () => {

     // String
   let yourName = "preeti";
   let greeting = "Hello,";
   let sentence = `${greeting} My name is ${yourName}`; // Template literals
   console.log( sentence)


//  Number

let age = 30;
let price = 19.99;
console.log(age)
console.log(price)


// Object
let person = {
  name: "Alice",
  age: 30,
  
};
console.log(person.name)
console.log(person.age)

 // Array
 let fruits = ["apple", "banana", "cherry"];
 console.log(fruits)
   // boolean
   let isStudent = true;
   let isTeacher = false;
   console.log(isStudent)
   console.log(isTeacher)
     // undefined
  let car;
  console.log(car); // Output: undefined
   // null
   let nothing = null
   console.log(nothing)

  return (
    <div>array</div>
  )
}

export default arr
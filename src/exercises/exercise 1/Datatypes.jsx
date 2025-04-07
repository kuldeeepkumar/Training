import React from 'react'

export const Datatypes = () => {
    let yourName = "Kuldeep";
   let greeting = "Hello";
   let sentence = `${greeting}  My name is ${yourName}`; // Template literals
 
   console.log( sentence)
 
   //  Number
 
   let age = 30;
   let price = 19.99;
 
   // boolea
   let student=true;
   let teacher= false;
 
   // Object
   let person = {
     name: "Alice",
     age: 30,
   };
 
   // Array
   let fruits = ["apple", "banana", "cherry"];
 
   // undefined
   let car ;
   console.log(car); // Output: undefined
 
   // null
   let nothing = null;
  return (
    <div>Datatypes</div>
  )
}
export default Datatypes

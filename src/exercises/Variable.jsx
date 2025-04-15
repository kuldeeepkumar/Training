import React from 'react'

const Variable = () => {
 // follwing code is representing veriables
  
 let name = "tania"; // Variable declared using let
 const Age = 25; // Constant variable declared using const
 name = "Bob"; // You can reassign 'name' since it was declared with 'let'
 // age = 26;          // Error: Assignment to constant variable


console.log(Age);
console.log(name); 

  return (
    <div>Variable</div>
  )
}

export default Variable
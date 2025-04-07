import React from 'react'

const Variables = () => {
 
   // follwing code is representing veriables
 
   let name = "shivani"; // Variable declared using let
   const Age = 25; // Constant variable declared using const
   name = "Bob"; // You can reassign 'name' since it was declared with 'let'
   // age = 26;          // Error: Assignment to constant variable
 
 
console.log(name)


  return (
    <div>variables</div>
  )
}

export default Variables;
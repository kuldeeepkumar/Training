import React from 'react'

const Variables = () => {
     // follwing code is representing veriables
 
   let name = "sheetal"; // Variable declared using let
   const age = 20; // Constant variable declared using const
   //name = "Bob"; // You can reassign 'name' since it was declared with 'let'
   // age = 26;          // Error: Assignment to constant variable


   console.log(name)
   console.log(age)

 
  return (
    <div>Variables</div>
  )
}

export default Variables
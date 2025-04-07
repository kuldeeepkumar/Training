import React from 'react'

const Variables = () => {

// follwing code is representing veriables
 
   let name = "Alice"; // Variable declared using let
   const age = 25; // Constant variable declared using const
   name = "Bob"; // You can reassign 'name' since it was declared with 'let'
   // age = 26;          // Error: Assignment to constant variable
 
  return (
    <div>Variables</div>
  )
}

export default Variables
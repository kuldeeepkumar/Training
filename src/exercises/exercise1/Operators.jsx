import React from 'react'

const Operators = () => {

    // Operators
   // Arithmetic Operators
 
   let x = 10;
   let y = 5;
   console.log(x + y); // Output: 15 (Addition)
   console.log(x - y); // Output: 5  (Subtraction)
   console.log(x * y); // Output: 50 (Multiplication)
   console.log(x / y); // Output: 2  (Division)
   console.log(x % y); // Output: 0  (Modulus)

   console.log(x)
   console.log(y)
 
   // Comparison Operators
 
   let a = 10;
   let b = 20;
   console.log(a == b); // Output: false (Equal to)
   console.log(a != b); // Output: true  (Not equal to)
   console.log(a > b); // Output: false (Greater than)
   console.log(a < b); // Output: true  (Less than)

   console.log(a)
   console.log(b)
 
   // Logical Operators
 
   let t = true;
   let h = false;
   console.log(t && h); // Output: false (AND)
   console.log(t || h); // Output: true  (OR)
   console.log(!t); // Output: false (NOT)

   console.log(t)
   console.log(h)
 
   // Assignment Operators
 
   let abc = 10;
   abc += 5; // a = a + 5 -> a = 15
   console.log(a); // Output: 15
   
   console.log(abc)
 

  return (
    <div>Operators</div>
  )
}
export default Operators
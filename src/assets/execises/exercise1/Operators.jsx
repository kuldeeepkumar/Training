import React from 'react'

const Operators = () => {

    let x = 100;
    let y = 50;
    console.log(x + y); // Output: 15 (Addition)
    console.log(x - y); // Output: 5  (Subtraction)
    console.log(x * y); // Output: 50 (Multiplication)
    console.log(x / y); // Output: 2  (Division)
    console.log(x % y); // Output: 0  (Modulus)
  
    // Comparison Operators
    let a = 100;
    let b = 200;
    console.log(a == b); // Output: false (Equal to)
    console.log(a != b); // Output: true  (Not equal to)
    console.log(a > b); // Output: false (Greater than)
    console.log(a < b); // Output: true  (Less than)
  
    // Logical Operators
  
    let t = true;
    let h = false;
    console.log(t && h); // Output: false (AND)
    console.log(t || h); // Output: true  (OR)
    console.log(!t); // Output: false (NOT)
  
    // Assignment Operators
  
    let abc = 10;
    abc += 5; // a = a + 5 -> a = 15
    console.log(a); // Output: 15
  
  return (
    <div>Operators</div>
  )
}

export default Operators
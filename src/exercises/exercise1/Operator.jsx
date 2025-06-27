import React from "react";

const Operator = () => {
  // Operators
  // Arithmetic Operators

  let a = 10;
  let b = 5;
  console.log(a + b); // Output: 15 (Addition)
  console.log(a - b); // Output: 5  (Subtraction)
  console.log(a * b); // Output: 50 (Multiplication)
  console.log(a / b); // Output: 2  (Division)
  console.log(a % b); // Output: 0  (Modulus)

  // Comparison Operators

  let x = 10;
  let y = 20;
  console.log(x == y); // Output: false (Equal to)
  console.log(x != y); // Output: true  (Not equal to)
  console.log(x > y); // Output: false (Greater than)
  console.log(x < y); // Output: true  (Less than)

  // Logical Operators

  let t = true;
  let h = false;
  console.log(t && h); // Output: false (AND)
  console.log(t || h); // Output: true  (OR)
  console.log(!t); // Output: false (NOT)

  // Assignment Operators

  let ABC = 10;
  ABC += 5; // a = a + 5 -> a = 15

  console.log(a); // Output: 15

  return <div>Operator</div>;
};

export default Operator;

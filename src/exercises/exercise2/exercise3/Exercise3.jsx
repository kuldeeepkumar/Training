import React from 'react'

const Exercise3 = () => {

  // Function to greet a user
  function greetUser(name) {
      return `Hello, ${name}!`;
  }

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Function to concatenate two strings
function concatenateStrings(str1, str2) {
    return `${str1} ${str2}`;
}

// Example usage
const name = "kalsi"; // Your name
console.log(greetUser(name)); // Output: Hello, kalsi!
console.log(addNumbers(5, 10)); // Output: 15
console.log(isEven(4)); // Output: true
console.log(concatenateStrings("Hello", name)); // Output: Hello kalsi
// Arrow function to calculate the square of a number


const square = (num) => num * num;

console.log(square(5)); // Output: 25






function show(){
    return 'Showing the function';
    
}
console.log(show());

function show1(){
    return 'Showing the function';
}
console.log(show1());





  return (
    <h1>Code is Running Functions</h1>
  )
}

export default Exercise3;

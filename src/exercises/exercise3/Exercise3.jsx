import React from "react";

const Exercise3 = () => {
  // ----------------------------------------
  // 1. FUNCTION DECLARATION
  // ----------------------------------------

  function greet(name) {
    return `Hello, ${name}`;
  }

  console.log(greet("Alice")); // Output: Hello, Alice

  // Function declaration is hoisted
  sayHello(); // Output: Hello

  function sayHello() {
    console.log("Hello");
  }

  // ----------------------------------------
  // 2. ARROW FUNCTIONS
  // ----------------------------------------

  // Basic arrow function
  const add = (a, b) => {
    return a + b;
  };

  console.log(add(3, 4)); // Output: 7

  // Implicit return
  const square = (x) => x * x;
  console.log(square(5)); // Output: 25

  // Arrow function and 'this' context
  const personArrow = {
    name: "Sarah",
    greet: () => {
      console.log(`Hello, I'm ${this?.name}`); // 'this' does not refer to personArrow
    },
  };

  personArrow.greet(); // Output: Hello, I'm undefined

  // Regular function with proper 'this' binding
  const personRegular = {
    name: "Sarah",
    greet() {
      console.log(`Hello, I'm ${this?.name}`);
    },
  };

  personRegular.greet(); // Output: Hello, I'm Sarah

  // ----------------------------------------
  // 3. PARAMETERS, ARGUMENTS, RETURN VALUES
  // ----------------------------------------

  // Default parameter
  function greetUser(name = "Guest") {
    return `Welcome, ${name}`;
  }

  console.log(greetUser()); // Output: Welcome, Guest

  // Function expression with two parameters
  const double = function (n) {
    return n * 2;
  };

  console.log(double(4)); // Output: 8

  // Function with rest parameters
  const average = (...nums) => {
    const sum = nums.reduce((acc, value) => acc + value, 0);
    return sum / nums.length;
  };

  console.log(average(10, 20, 30)); // Output: 20

  // Using arrow function with array methods
  const users = ["Tom", "Jerry", "Spike"];
  const greetings = users.map((user) => `Welcome, ${user}!`);

  console.log(greetings);
  // Output: [ 'Welcome, Tom!', 'Welcome, Jerry!', 'Welcome, Spike!' ]

  // Function with too few and too many arguments
  function show(x, y) {
    console.log(x, y);
  }

  show(1); // Output: 1 undefined
  show(1, 2, 3); // Output: 1 2

  // Regular function using arguments object
  function logArgs() {
    console.log(arguments);
  }

  logArgs(1, 2, 3);
  // Output: { '0': 1, '1': 2, '2': 3 }

  // ----------------------------------------
  // END OF FILE
  // ----------------------------------------

  return (
    <div>
      <h1>Exercise3</h1>
    </div>
  );
};

export default Exercise3;

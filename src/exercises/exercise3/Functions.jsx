import React from "react";

const Functions = () => {
  //Function declaration
  function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Ripan"));
  //Arrow function
  const square = (x) => {
    return x * x;
  };
  console.log(square(4));

  const person = {
    name: "Ripan",
    age: 20,
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
  person.greet();

  //parametrized function
  function sayHello(name) {
    return `Hello, ${name}!`;
  }
  console.log(sayHello("Ripan"));
  //return value
  function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3));
  //default parameter
  function greetName(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greetName());
  console.log(greetName("Ripan"));
  //rest parameter
  function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4, 5));
  // the arguments object
  function logArgs() {
    console.log(arguments);
  }
  logArgs(1, 2, 3, 4, 5);
  return (
    <div>
      <h1>Functions</h1>
    </div>
  );
};

export default Functions;

import React from "react";

const Exercise3 = () => {
  //function declaration
  console.log("Function declaratio");

  function greet(name) {
    return `hello, ${name}`;
  }
  console.log(greet("pratibha"));

  //Basic arrow function
  console.log("Function declaration");

  const add = (a, b) => {
    return a + b;
  };
  console.log(add(3, 4)); // output: 7

  //Implicit return
  console.log("Function declaration");

  const square = (x) => x * x;

  console.log(square(6)); // output: 36

  //No Own this
  console.log("Function declaration");

  const person = {
    name: "pratibha",
    greet() {
      console.log(`hello, i'm ${this.name}`);
    },
  };
  person.greet(); // output: hello, i'm pratibha

  //parameters
  console.log("Function declaration");
  function sayhello(name) {
    return `hello, ${name}`;
  }
  console.log(sayhello("pratibha")); // "pratibha" is the argument

  //Arguments

  console.log("Function declaration");
  function show(x, y) {
    console.log(x, y);
  }
  show(1); // output: 1 undefined
  show(1, 2, 3); // output: 8

  //Return values
  console.log("Function declaration");
  function multiply(a, b) {
    return a * b;
  }
  const result = multiply(2, 4);
  console.log(result); // output: 8

  //Default parameters

  console.log("Function declaration");
  function meet(name = "guest") {
    return `welcome, ${name}`;
  }
  console.log(meet()); // output: welcome, guest

  // rest paramerters
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6));

  // The arguments object
  function greet3() {
    return console.log(arguments);
  }

  console.log(greet3(1, 2, 3, 4, 5));

  function logArgs() {
    console.log(arguments);
  }
  let abc = {
    $name: "pratibha",
    age: 19,
    role: "developer",
  };
  let dfg = {
    $name: "pratibha",
    age: 19,
    role: "developer",
  };

  console.log(logArgs(abc, dfg));

  return <div> </div>;
};

export default Exercise3;

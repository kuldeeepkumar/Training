import React from 'react'

const Exercise3 = () => {
  //1
  console.log("1 .Function declaration");

  function greet(name) {
    return ` Hello, ${name}`;
  }

  console.log(greet("nisha"));

  //2

  console.log("2. function declaration");

  sayHello();

  function sayHello() {
    console.log("Hi");
  }

  //3

  console.log("Arrow Function");

  const add = (a, b) => {
    return a + b;
  };
  console.log(add(2, 3));

  //4

  console.log("Implicit Return");

  const square = (x) => x * x;
  console.log(square(5));

  //5

  console.log("No own this");

  const person = {
    name: "nisha",
    greet() {
      console.log(`Hello,I'm ${this.name}`);
    },
  };

  person.greet();

  //6

  console.log("Parameter and arguments");
  //parameter

  function sayhello(name) {
    return `Hello, ${name}`;
  }

  // arguments

  console.log(sayhello("tania,shivani"));

  //7

  console.log("arguments");

  function show(x, y) {
    console.log(x, y);
  }

  console.log(show(1));
  console.log(show(1, 2, 3));

  //8 Return values

  function multiply(a, b) {
    return a * b;
  }
  const result = multiply(2, 4);
  console.log("result of multiplication", result);

  //9

  console.log("default parameter");

  function greet1(name = "Guest") {
    return ` welcome ,${name}`;
  }

  console.log(greet1());

  //10

  console.log("rest parameter");

  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));

  //11

  console.log("The arguments object");

  function logArgs() {
    console.log(arguments);
  }
  logArgs(1, 2, 3);
  return <div>Exercise3</div>;
}

export default Exercise3;

import React from "react";

const Exercise3 = () => {
  // //function declaration
  function greet(name) {
    return ` hello,${name}`;
  }
  console.log(greet("alice"));

  sayhello();
  function sayhello() {
    console.log("hello");
  }

  // //basic arrow function

  const add = (a, b) => {
    return a + b;
  };
  console.log(add(3, 4));

  //implict return
  const square = (x) => x * x;
  console.log(square(5));
  //parameters,arguments and return values
  //parameters
  function sayHello(name) {
    return `Hello, ${name}`;
  }
  //arguments
  sayHello("pret");
  function show(x, y) {
    console.log(x, y);
  }
  show(1);
  show(1, 2, 3);
  //return values
  function multiply(a, b) {
    return a * b;
  }
  const result = multiply(2, 4);
  console.log(result);
  //default parameters
  function greet(name = "Guest") {
    return `welcome, ${name}`;
  }
  console.log(greet());

  //rest parameters
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));
  // the arguments object
  function logArgus() {
    console.log(arguments);
  }
  logArgus(1, 2, 3);

  return <div>Exercise3</div>;
};

export default Exercise3;

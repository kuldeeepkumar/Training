import React from "react";

const Exercise3 = () => {
  console.log(" 1 => Function Declaration and Expressions");
  function greet(name) {
    return `hello ${name}`;
  }
  console.log(greet("Baljit"));

  //2
  console.log(" 2 => Function Declaration");

  sayHello();

  function sayHello() {
    console.log("Hello");
  }

  //3
  console.log(" 3 => Basic Arrow Function");
  const add = (a, b) => {
    return a + b;
  };
  console.log(add(3, 4));

  //4
  console.log(" 4 => Implicit return");

  const square = (x) => x * x;

  console.log(square(5));

  //5 how we are declaring function in object data types

  console.log(" 5 => No Own this ");

  const person = {
    name: "Gagan",
    greet() {
      console.log(`hello ,I'm ${this.name}`);
    },
  };
  person.greet();

  //6

  console.log(" 6 => Parameters");

  function sayhello(name) {
    return `hello, ${name}`;
  }
  console.log(sayhello("anchal"));

  //7

  console.log(" 7 => Argument");
  function show(x, y) {
    console.log(x, y);
  }
  show(1);
  show(1, 2, 3);

  //8

  console.log(" 8 => Return Values");

  function multiply(a, b) {
    return a * b;
  }
  const result = multiply(2, 4);
  console.log(result);

  //9

  console.log(" 9 => Default Parameter");

  function greet1(name = "kirti") {
    return `Welcome, ${name}`;
  }
  console.log(greet1());

  //10

  console.log(" 10 => Rest Parameter");

  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5));

  //11

  console.log(" 11 => The argument Object");

  function logArgs() {
    console.log(arguments);
  }
  logArgs(1, 2, 3);
  return <h1> Exercise 3 </h1>;
};

export default Exercise3;

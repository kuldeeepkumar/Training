import React from "react";

const Exercise3 = () => {
  //1. function declaration:
  function greet(name) {
    return `Hello,${name}`;
  }
  console.log(greet("Alice"));
  //2.
  sayHello();

  function sayHello() {
    console.log("Hello");
  }
  //3. arrow functions
  const add = (a, b) => {
    return a + b;
  };
  console.log(add(3, 4));

  //4. implicit return
  const square = (x) => x * x;
  console.log(square(6));

  //5. no own this

  const person = {
    name: "anchal",
    greet() {
      console.log(`hello, I'm ${this.name}`);
    },
  };
  person.greet();

  // 6. parameter ,arguments and return values

  function sayHello(name) {
    return `Hello,${name}`;
  }
  console.log(sayHello("anchal"));

  function show(x, y) {
    console.log(x, y);
  }
  show(1);
  show(1, 2, 3);

  //7. Return values
  function multiply(a, b) {
    return a * b;
  }
  const result = multiply(2, 4);
  console.log(result);

  //8. default parameters
  function greet(name = "Guest") {
    return `welcome,${name}`;
  }
  console.log(greet());

  //9. Rest parameters
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4));

  //10. The arguments objects
  function logArgs() {
    console.log(arguments);
  }
  logArgs(1, 2, 3);
  return <div>Exercise3</div>;
};

export default Exercise3;

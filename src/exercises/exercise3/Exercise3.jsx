import React from 'react'

const Exercise3 = () => {

//  Here we are covering function declaration , aguemnts parameteres , return value , and Arrow function with syntax and proper outputs
  // function declaration

  function greet(name) {
    return "hello${name}";
  }
  console.log(greet("Alice"));

  // Basic arrow function
  const add = (a, b) => {
    return a + b;
  };
  console.log(add(3, 4));

  //implicit return

  const square = (x) => x * x;
  console.log(square(5));

  //no own this
  const person = {
    name: "sarah",
    greet() {
      console.log(`hello, i'm ${this?.name}`);
    },
  };

  person.greet();

  // parameters
  function sayHello(name) {
    return `Hello, ${name}`;
  }
  console.log(sayHello("daniel"));

  // arguments
  function show(x, y) {
    console.log(x, y);
  }
  show(1);
  show(1, 2, 3, 4);

  //return value
  function multiply(a, b) {
    return a * b;
  }

  const result = multiply(2, 4);
  console.log(result);

  // default parameters
  function greet1(name = "guest") {
    return `welcome,${name}`;
  }
  console.log(greet1());

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
    $name: "shikha",
    age: 19,
    role: "developer",
  };
  let dfg = {
    $name: "shikha",
    age: 19,
    role: "developer",
  };

  console.log(logArgs(abc, dfg));


  return (
    <div>
      
    </div>
  )
}

export default Exercise3

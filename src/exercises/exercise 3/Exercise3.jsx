import React from "react";

const Exercise3 = () => {
  // Function Declaration eg 1
  function greet(name) {
    return `hello, ${name}`;
  }
  console.log(greet("Aman"));
  //eg2
  sayHello();
  function sayHello() {
    console.log("Hello");
  }
  // Arrow function eg1
  const add = (a, b) => {
    return a + b;
  };
  console.log(add(3, 4));
  //eg2
  const square = (x) => x * x;

  console.log(square(5));
  //eg3
  const person = {
    name: "Aman",
    greet: () => {
      console.log(`Hello, I'm ${this?.name}`);
    },
  };
  person.greet();
  //eg4
  const people = {
    name: "Palak",
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
  people.greet();

  return <div>Exercise3</div>;
};

export default Exercise3;

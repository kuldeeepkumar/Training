import React from "react";

const Class = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }

  const person1 = new Person("Alice", 30);
  person1.greet();

  return <div>Class</div>;
};

export default Class;

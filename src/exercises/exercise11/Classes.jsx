import React from 'react'

const Classes = () => {
//============================================================
  // Introduction to Classes
  //============================================================

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
  person1.greet();  // Output: Hello, my name is Alice.
  return (
    <div>
      Classes
    </div>
  )
}

export default Classes

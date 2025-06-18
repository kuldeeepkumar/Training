import React from 'react'
import Inheritance from './Inheritance';

const Inheritance = () => {

  //============================================================
  // Inheritance in JavaScript
  //============================================================

  class Animal {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent class constructor
      this.breed = breed;
    }

    speak() {
      console.log(`${this.name} barks.`);
    }

    showBreed() {
      console.log(`Breed: ${this.breed}`);
    }
  }

  const dog1 = new Dog("Buddy", "Golden Retriever");
  dog1.speak();    // Output: Buddy barks.Add commentMore actions
  dog1.showBreed();    // Output: Breed: Golden Retriever

  return (
    <div>
      Inheritance
    </div>
  )
}

export default Inheritance

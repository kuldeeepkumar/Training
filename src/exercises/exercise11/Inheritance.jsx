import React from "react";

const Inheritance = () => {
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
      super(name);
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
  dog1.speak();
  dog1.showBreed();
  return <div>Inheritance</div>;
};

export default Inheritance;

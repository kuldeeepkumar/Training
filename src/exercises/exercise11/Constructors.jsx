import React from "react";

const Constructors = () => {
  //============================================================
  // Constructors and Methods
  //============================================================

  class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }

    displayInfo() {
      console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
  }

  const car1 = new Car("Toyota", "Corolla");
  car1.displayInfo(); // Output: Brand: Toyota, Model: Corolla
  return <div><h1>Constructors</h1></div>;
};

export default Constructors;
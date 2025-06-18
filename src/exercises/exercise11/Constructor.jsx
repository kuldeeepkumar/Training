import React from "react";

const Constructor = () => {
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
  car1.displayInfo();
  return <div>Constructor</div>;
};

export default Constructor;

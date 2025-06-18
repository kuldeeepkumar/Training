import React from "react";

const Constructor = () => {
  class car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }

    displayInfo() {
      console.log(`Brand :${this.brand}, Model:${this.model}`);
    }
  }

  const car1 = new car("Toyota", "Corolla");
  car1.displayInfo();
  return <div>Constructor</div>;
};

export default Constructor;

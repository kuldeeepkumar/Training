import React from "react";
import AllMethod from "./AllMethod";

const Exercise4 = () => {
  //predefine methods in array and objects
  const fruits = ["Apple", "Banana", "Cherry"];
  //push method in an array
  fruits.push("Mango");
  console.log(fruits);
  //pop method in an array
  fruits.pop();
  console.log(fruits);
  //shift method in an array
  fruits.shift();
  console.log(fruits);
  //unshift methods in an array
  fruits.unshift("orange");
  console.log(fruits);
  //an object is a collection of key-value pairs
  const person = {
    name: "john",
    age: 30,
    isstudents: false,
  };
  //accessing and updating properties in an object
  console.log(person.name);
  console.log(person["age"]);
  person.age = 31;
  person.city = "new york";
  return <div>Exercise4</div>;
};

export default Exercise4;

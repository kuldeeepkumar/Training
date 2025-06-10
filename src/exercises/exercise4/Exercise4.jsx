import AllMethods from "./AllMethods";
import React from "react";

const Exercise4 = () => {
  // PreDefine methods in array and objects

  const fruits = ["apple", "banana", "cherry"];

  fruits.push("orange");
  console.log(fruits); // ["apple", "banana", "cherry", "orange"]

  const person = {
    name: "John",
    age: 30,
  };

  console.log;
  person.name; // John

  const person2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 35 },
  ];
  console.log("here is length", person2.length); // [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Mike", age: 35 }]

  const numbers = [1, 2, 3, 4, 5];

  const double = numbers.map((number) => number * 2);

  console.log(double); // [2, 4, 6, 8, 10]

  return (
    <div>
      <AllMethods />
    </div>
  );
};

export default Exercise4;

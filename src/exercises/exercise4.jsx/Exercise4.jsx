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

  const person2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 35 },
  ];
  console.log(person2); // [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Mike", age: 35 }]

  const numbers = [1, 2, 3, 4, 5];

  const double = numbers.map((number) => number * 2);

  console.log(double); // [2, 4, 6, 8, 10]

  return (
    <div>
      <h1>Exercise4</h1>
      {person2.map((person, index) => (
        <div key={index}>
          <h2>{person.name}</h2>
          <p>{person.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Exercise4;

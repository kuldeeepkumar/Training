import React from "react";

const Exercise4 = () => {
  //predefine methods in array and object

  const fruits = ["apple", "banana", "cherry"];
  console.log(fruits);

  //push method in an array

  fruits.push("mango");
  console.log(fruits);

  //pop methods in an array

  fruits.pop();
  console.log(fruits);

  //shift methods in an array

  fruits.shift();
  console.log(fruits);

  //unshift methods in an array

  fruits.unshift("orange");
  console.log(fruits);

  //an object is a collection of key-value pairs

  const person = {
    name: "john",
    age: 30,
    isStudent: false,
  };
  //accessing and updating properties in an object

  console.log(person.name);
  console.log(person["age"]);

  person.age = 31;
  person.city = "new york";

  //map method in an array

  const number = [1, 2, 3];
  const doubled = number.map((num) => num * 2);
  console.log(doubled);

  //filter method in an array
  const numbers = [1, 2, 3, 4, 5];
  const evens = numbers.filter((num) => num % 2 === 0);
  console.log(evens);

  //reduce method in an array

  const num = [1, 2, 3, 4];
  const sum = num.reduce((acc, num) => acc + num, 0);
  console.log(sum);

  return <div>Exercise4</div>;
};

export default Exercise4;

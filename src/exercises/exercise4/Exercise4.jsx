import React from "react";

const Exercise4 = () => {
  // Array declaration

  console.log(" given array");

  const fruits = ["apple", "mango", "banana"];
  console.log(fruits);

  // push()

  console.log("after push()");

  fruits.push("cherry");
  console.log(fruits);

  //pop()

  console.log("after pop");

  fruits.pop();
  console.log(fruits);

  //shift

  console.log("after shift");

  fruits.shift();
  console.log(fruits);

  //unshift

  console.log("after unshift");

  fruits.unshift();
  console.log(fruits);

  //---object----

  console.log("object");
  const person = {
    name: "baljit",
    age: "19",
    isStudent: true,
  };

  console.log(person.name);
  console.log(person["age"]);
  console.log(person);

  console.log("after opertions");

  person.age = 31;
  person.city = "New york";
  console.log(person);

  //array

  console.log("array");
  const numbers = [1, 2, 3];
  console.log(numbers);

  console.log("map()");

  const double = numbers.map((num) => num * 2);
  console.log(double);

  console.log("filter");

  const nums = [1, 2, 3, 4, 5];
  const evens = nums.filter((num) => num % 2 === 0);
  console.log(evens);

  console.log("reduce()");

  const number = [1, 2, 3, 4];
  const sum = number.reduce((acc, num) => acc + num, 0);
  console.log(sum);

  return <div>Exercise4</div>;
};

export default Exercise4;

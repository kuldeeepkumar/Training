import React from "react";

const Exercise5 = () => {
  //Understanding null,undefined and NaN

  //null
  let car = null;
  console.log(car);
  console.log(typeof car);

  //undefined
  let bike;
  console.log(bike);

  function greet() {
    console.log("Hello");
  }
  let result = greet();
  console.log(result);

  //NaN(Not-a-Number)
  let x = 0 / 0;
  console.log(x);
  let y = parseInt("hello");
  console.log(y);

  console.log(typeof NaN);
  console.log(NaN === NaN);

  //Array Destructing
  const colors = ["red", "green", "blue"];

  const [first, second, third] = colors;

  console.log(first);
  console.log(second);
  console.log(third);

  //Skipping values
  const numbers = [1, 2, 3, 4];
  const [a, , c] = numbers;

  console.log(a);
  console.log(c);

  //Using rest....
  const fruits = ["apple", "banana", "cherry", "date"];
  const [f1, ...restFruits] = fruits;

  console.log(f1);
  console.log(restFruits);

  //Object Destructuring
  const person = {
    name: "jass",
    age: 20,
    job: "Developer",
  };

  const { name, age } = person;

  console.log(name);
  console.log(age);

  //Renaming
  const { name: userName, age: userAge } = person;

  console.log(userName);
  console.log(userAge);

  //Nested Destructuring

  console.log("Nested Destructuring");

  const user = {
    id: 1,
    profile: {
      username: "john_doe",
      email: "john@example.com",
    },
  };

  const {
    profile: { username },
  } = user;
  console.log(username);

  //spread operator
  //1. spreading in arrays
  console.log("spreading in arrays");

  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];

  console.log(arr2);

  //2. spreading in objects

  console.log("spreading in objects");

  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };

  console.log(obj2);

  //3.  spreading in function calls
  console.log("spreading in function calls");

  const digits = [10, 20, 30];

  function sum(a, b, c) {
    return a + b + c;
  }

  console.log(sum(...digits));

  //Rest parameter
  //1. Rest in function

  console.log("Rest in function");

  const arr6 = [1, 2, 3];
  const arr7 = [...arr6, 4, 5];
  console.log(arr7);

  //   //1. Rest in Destructuring
  console.log("Rest in  Destructuring");
  const [one, ...rest] = [10, 20, 30, 40];

  console.log(one);
  console.log(rest);

  return <div>Exercise5</div>;
};

export default Exercise5;

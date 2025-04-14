import React from "react";

const Exercise5 = () => {
  //null represents the absence of a value

  let car = null;
  console.log(car);
  console.log(typeof car);

  //undefined represents a variables that has been declared but not assigned a value

  let bike;
  console.log(bike);

  function greet() {
    console.log("hello!");
  }
  let result = greet();
  console.log(result);

  //NaN is a special number value that stands for an invalid number operation

  let x = 0 / 0;
  console.log(x);

  let y = parseInt("hello");
  console.log(y);

  console.log(typeof NaN);
  console.log(NaN === NaN);

  //array destructuring

  const colors = ["red", "green", "blue"];
  const [first, second, third] = colors;

  console.log(first);
  console.log(second);
  console.log(third);

  //skipping values in an array destructuring

  const number = [1, 2, 3, 4];
  const [a, , c] = number;

  console.log(a);
  console.log(c);

  //using rest....

  const fruits = ["apple", "banana", "cherry", "date"];
  const [f1, ...restfruits] = fruits;

  console.log(f1);
  console.log(restfruits);

  //object destructuring

  const person = {
    name: "alice",
    age: 30,
    job: "developer",
  };

  const { name1, age1 } = person;

  console.log(name1);
  console.log(age1);

  //renaming variables in an object destructuring

  const { name2: userName1, age2: userAge1 } = person;

  console.log(userName1);
  console.log(userAge1);

  //using default values in an object destructuring

  const { name, city = "unknown" } = person;

  console.log(city);

  //nested destructuring

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

  const data = [1, [2, 3]];

  const [e, [f, g]] = data;

  console.log(e);
  console.log(f);
  console.log(g);

  //spread operator

  //spreading in arrays

  const arr = [1, 2, 3];
  const arrr = [...arr, 4, 5];

  //spreading in objects

  const obj1 = { a: 1, b: 22 };
  const obj2 = { ...obj1, c: 3 };

  console.log(obj2);

  //spreading in functions calls

  const numbers = [10, 20, 30];

  function sum(a, b, c) {
    return a + b + c;
  }

  console.log(sum(...numbers));

  //rest parameter

  //rest in functions

  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2);

  // rest in destructuring
  const [first1, ...rest] = [10, 20, 30, 40];

  console.log(first1);
  console.log(rest);

  return <div>Exercise5</div>;
};

export default Exercise5;

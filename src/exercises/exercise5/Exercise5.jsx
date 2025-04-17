import React from "react";

const Exercise5 = () => {
  //1. null
  let car = null;
  console.log(car);
  console.log(typeof car);

  //2. undefined
  let bike;
  console.log(bike);

  function greet() {
    console.log("Hello!");
  }
  let result = greet();
  console.log(result);

  //3. NaN(Not-a-Number)
  let x = 0 / 0;
  console.log(x);

  let y = parseInt("hello");
  console.log(y);

  console.log(typeof NaN);
  console.log(NaN === NaN);

  //Destructing
  //1. Array Destructing
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

  //Using rest
  const fruits = ["apple", "banana", "cherry", "date"];
  const [f1, ...restfruits] = fruits;
  console.log(f1);
  console.log(restfruits);

  //Object Destructing
  const person = {
    name: "Alice",
    age: 30,
    job: "developer",
  };
  const { name, age } = person;
  console.log(name);
  console.log(age);

  //Renaming Variables
  const { name: username, age: userage } = person;
  console.log(username);
  console.log(userage);

  //using nested destructing
  //Example with objects:
  const user = {
    id: 1,
    profile: {
      userName: "john_doe",
      email: "john@example.com",
    },
  };
  const {
    profile: { userName },
  } = user;
  console.log(userName);

  //Example with arrays:
  const data = [1, [2, 3]];
  const [m, [n, o]] = data;
  console.log(m);
  console.log(n);
  console.log(o);

  //spreading in array
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2);

  //spreading in object
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  console.log(obj2);

  //spreading in function calls
  const values = [10, 20, 30];
  function sum(a, b, c) {
    return a + b + c;
  }
  console.log(sum(...values));

  //rest parameter
  // rest in function
  const arr3 = [1, 2, 3, 4];
  const arr4 = [...arr3, 4, 5];
  console.log(arr4);

  // rest in destructing
  const [fourth, ...rest] = [10, 20, 30, 40];
  console.log(fourth);
  console.log(rest);

  return <div>Exercise5</div>;
};

export default Exercise5;

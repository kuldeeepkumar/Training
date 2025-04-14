import React from "react";

const Exercise5 = () => {
  //use null
  let car = null;
  console.log(car);
  console.log(typeof car);

  //use undefined
  let bike;
  console.log(bike);
  function greet() {
    console.log("hello");
  }
  let result = greet();
  console.log(result);

  //use NaN
  let x = 0 / 0;
  console.log(x);
  let y = parseInt("hello");
  console.log(y);
  console.log(typeof NaN);
  console.log(NaN === NaN);

  //destructuring(array)
  //use array destructing
  const colors = ["red", "green", "blue"];
  const [first, second, third] = colors;
  console.log(first);
  console.log(second);
  console.log(third);
  //use skipping value
  const number = [1, 2, 3, 4];
  const [a, , c] = number;
  console.log(a);
  console.log(c);
  // using rest....
  const fruits = ["apple", "banana", "cherry", "date"];
  const [f1, ...restFruits] = fruits;
  console.log(f1);
  console.log(restFruits);
  // object destructing
  const person = {
    name: "preet",
    age: 21,
    city: "dasuya",
  };
  const { name, age } = person;
  console.log(name);
  console.log(age);
  //nested destructing
  const user = {
    id: 1,
    profile: {
      username: "preet_11",
      email: "pree11@gmail.com",
    },
  };
  const {
    profile: { username },
  } = user;
  console.log(username);

  // in array
  const date = [1, [2, 3]];
  const [e, [b, f]] = date;
  console.log(e);
  console.log(b);
  console.log(f);
  // spread operator and rest parameter
  // spread operator(...)
  //spreading in array
  const array1 = [1, 2, 3];
  const array2 = [...array1, 4, 5];
  console.log(array2);
  //spreading in object
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  console.log(obj2);
  // spreading in function calls
  const numbers = [10, 20, 30];
  function sum(a, b, c) {
    return a + b + c;
  }
  console.log(sum(...numbers));
  //rest parameters(...)
  //rest in functions
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2);
  //rest in destructing
  const [one, ...rest] = [10, 20, 30, 40];
  console.log(one);
  console.log(rest);

  return <div>Exercise5</div>;
};

export default Exercise5;

import React from "react";

const AdvanseDatatypes = () => {
  //null
  let car = null;
  console.log(car);
  console.log(typeof car);
  //undefined
  let bike;
  console.log(bike);
  function greet() {
    console.log("hello");
  }
  let result = greet();
  console.log(result);
  //NaN(Not-a-Numbers)
  let x = 0 / 0;
  console.log(x);

  let y = parseInt("hello");
  console.log(y);

  console.log(typeof NaN);
  console.log(Number.isNaN(NaN));
  //Array Destructuring

  const colors = ["red", "green", "blue"];

  const [first, second, third] = colors;
  console.log(first);
  console.log(second);
  console.log(third);

  //skipping values
  const numbers = [1, 2, 3, 4];
  const [a, , c] = numbers;

  console.log(a);
  console.log(c);

  //using rest
  const fruits = ["apple", "banana", "cherry", "date"];
  const [f1, ...restFruits] = fruits;

  console.log(f1);
  console.log(restFruits);

  //object destrycting
  const person = {
    name: "tania",
    age: 19,
    job: "Develpoer",
  };
  const { name, age } = person;
  console.log(name);
  console.log(age);

  //renaming variables
  const { name: userName, age: userAge } = person;
  console.log(userName);
  console.log(userAge);

  const { city = "Unknown" } = person;
  console.log(city);

  // nested destructuring
  const user = {
    id: 1,
    profile: {
      username: "nisha",
      email: "nisha@gmail.com",
    },
  };
  const {
    profile: { username },
  } = user;
  console.log(username);

  const data = [1, [2, 3]];
  const [a1, b, c1] = data;
  console.log(a1);
  console.log(b);
  console.log(c1);

  return (
    <>
      <div>
        <h1>Advanced Datatypes</h1>
      </div>
    </>
  );
};

export default AdvanseDatatypes;

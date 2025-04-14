import React from "react";

const Exercise4 = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  //push()
  fruits.push("Mango");
  console.log(fruits);
  //pop()
  fruits.pop();
  console.log(fruits);
  //shift()
  fruits.shift();
  console.log(fruits);
  //unshift()
  fruits.unshift("Orange");
  console.log(fruits);
  //object()
  const person = {
    name: "nisha",
    age: 19,
    isStudent: false,
  };
  console.log(person.name);
  console.log(person["age"]);
  person.age = 22;
  person.city = "New york";
  console.log(person.age);
  console.log(person.city);
  //array method

  //map()
  const numbers1 = [1, 2, 3];
  const doubled = numbers1.map((num) => num * 2);
  console.log(numbers1);
  console.log(doubled);
  //filter()
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter((num) => num % 2 === 0);
  console.log(evens);
  //reduce
  const numbers2 = [1, 2, 3, 4, 5];
  const sum = numbers2.reduce((acc, num) => acc + num, 0);
  console.log(sum);

  return (
    <div>
      <h1>Exercise4 </h1>
    </div>
  );
};

export default Exercise4;

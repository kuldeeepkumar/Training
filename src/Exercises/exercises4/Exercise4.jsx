import React from "react";

const Exercise4 = () => {
  //predefine methods in array and object

  const fruits = ["Apple", "Banana", "Cherry"];

  //push mathod in an array

  fruits.push("mango");
  console.log(fruits);

  //pop method in an array

  fruits.pop();
  console.log(fruits);

  //shift method in an array

  fruits.shift();
  console.log(fruits);

  //unshift methods in an array

  fruits.unshift("orange");
  console.log(fruits);

  //an object is a collection of key value pairs

  const person = {
    name: `pratibha`,
    age: 19,
    isstudent: true,
  };

  //accessing and updating properties in an array

  console.log(person.name); //pratibha
  console.log(person[`age`]); //19

  person.age = 20;
  person.city = `New York`;

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

  return <div> </div>;
};

export default Exercise4;

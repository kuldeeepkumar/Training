//import React from 'react'

//const AllMethods = () => {

// const fruits = ["apple", "banana", "cherry"];

//fruits.push("orange");
//console.log(fruits); // ["apple", "banana", "cherry", "orange"]

///const person = {
//name: "John",
// age: 30,
//};

//const person2 = [
// { name: "John", age: 30 },
//{ name: "Jane", age: 25 },
// { name: "Mike", age: 35 },
//];
//   console.log(person2); // [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Mike", age: 35 }]

// const numbers = [1, 2, 3, 4, 5];

//const double = numbers.map((number) => number * 2);

//console.log(double); // [2, 4, 6, 8, 10]

//return (
// <div>
// <h1>Exercise4</h1>
// {person2.map((person, index) => (
/// <div key={index}>
//<h2>{person.name}</h2>
// <p>{person.age}</p>
//</div>
//))}
//</div>
// );
//};

//export default AllMethods;

import React from "react";

const AllMethods = () => {
  //1
  const months = ["march", " jan", "feb", "dec"];
  months.sort();
  console.log(months);

  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);

  //2
  //array.form()
  console.log(Array.from("foo"));
  console.log(Array.from([1, 2, 3], (x) => x + x));

  //3
  //async iterable
  // const asyncIterable = async function* () {
  //   for (let i = 0; i < 5; i++) {
  //     await new Promise((resolve) => setTimeout(resolve, 10 * i));
  //     yield i;
  //   }
  // };
  // Array.fromAsync(asyncIterable).then((array) => console.log(array));

  // Array.isArray()
  console.log(Array.isArray([1, 3, 5]));
  console.log(Array.isArray("[]"));
  console.log(Array.isArray(new Array(5)));
  console.log(Array.isArray(new Int16Array([15, 33])));

  // Array.of()
  console.log(Array.of("foo", 2, "bar", true));
  console.log(Array.of());

  return <div>AllMethod</div>;
};

export default AllMethods;

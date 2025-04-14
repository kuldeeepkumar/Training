import React from "react";

const Array = () => {
  const fruits = ["apple", "banana", "cherry"];

  fruits.push("orange");
  console.log(fruits);
  //["apple","banana","cherry","orange"]

  fruits.pop("orange");
  console.log(fruits);
  //["apple","banana","cherry"]

  fruits.shift();
  console.log(fruits);
  //["banana","cherry"]

  fruits.unshift("mango");
  console.log(fruits);
  //["mango","+banana","cherry"]

  //objects

  const person = {
    name: "Ram",
    age: 30,
    isStudent: false,
  };
  console.log(person.name); // Ram
  console.log(person["age"]); // 30

  person.age = 31;
  person.city = "New york";

  //Array Methods

 const numbers1 = [1, 2, 3];
 const double = numbers1.map((number) => number * 2);
 console.log(double);

 //Filter: Filter items base on conditions
 const numbers2 = [1, 2, 3];
 const evens = numbers2.filter((num) => num % 2 == 0);
 console.log(evens);

 //Reduce: Reduce array to single value
 const sum = numbers1.reduce((acc, num) => acc + num, 0);
 console.log(sum);
 
  return (
    <div>
      <h1>Arrays</h1>
    </div>
  );
};

export default Array;

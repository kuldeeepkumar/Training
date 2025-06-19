import React from 'react'

const Arrays = () => {
  //array
  const fruits = ["Apple", "Banana", "Cherry", "Dates"];
  console.log(fruits);
  //Pushing element at end
  fruits.push("Mango");
  console.log(fruits);
  //POP element from end
  fruits.pop();
  console.log(fruits);
  //Add element at start
  fruits.unshift("Mango");
  console.log(fruits);
  //POP element from start
  fruits.shift();
  console.log(fruits);
  //Objects
  const person={
    name:"Akash",
    age:19,
    isStudent: true
  };
  console.log(person.name);
  console.log(person['age']);
  person.age=20;
  person.city='New York';
   console.log(person.city);
  //array Methods
  //Map: Transform each item in array
  const numbers1 = [1, 2, 3];
  const double = numbers1.map((number) => number * 2);
  console.log(double);
//Filter: Filter items base on conditions
const numbers2=[1,2,3];
const evens=numbers2.filter((num)=>num%2==0);
console.log(evens);
//Reduce: Reduce array to single value
const sum=numbers1.reduce((acc,num)=>acc+num,0);
console.log(sum);
  return (
    <div>
      <p>Arrays</p>
    </div>
  );
}

export default Arrays

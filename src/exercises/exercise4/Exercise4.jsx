import React from 'react'

const Exercises4 = () => { 

  //predefine methods in array and object

  const fruits = ["apple", "banana", "cherry"];
  console.log(fruits);

  //push method in an array

  fruits.push("mango");
  console.log(fruits);

  //pop methods in an array

  fruits.pop();
  console.log(fruits);

  //shift methods in an array

  fruits.shift();
  console.log(fruits);

  //unshift methods in an array

  fruits.unshift("orange");
  console.log(fruits);

  //an object is a collection of key-value pairs

  const person = {
    name: "john",
    age: 30,
    isStudent: false,
  };
  console.log(person.name);
  console.log(person["age"]);

  person.age = 31;
  person.city = "new york";

  //array methods-map()
  const number = [1,2,3];
  const double = number.map(num=> num *2);
   console.log(double); 
    //  filter()
    const numbers = [1,2,3,4,5];
    const evens = numbers.filter(num => num % 2==0);
    console.log(evens);

  //  reduce()
   const no =[1,2,3,4];
   const sum = no .reduce((acc,num) => acc+num,0);
   console.log(sum);
//
 const person2 = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 35 },
];
console.log(person2); // [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Mike", age: 35 }]

const numbers1 = [1, 2, 3, 4, 5];

const double1 = numbers1.map((number) => number * 2);
console.log(double1); // [2, 4, 6, 8, 10]

return (
  <div>
    <h1>Exercise4</h1>
    {person2.map((person, index) => (
      <div key={index}>
        <h2>{person.name}</h2>
        <p>{person.age}</p>
      </div>
    ))}
  </div>
   );
  };
export default Exercises4;
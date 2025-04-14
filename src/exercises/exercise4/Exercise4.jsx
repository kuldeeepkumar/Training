import React from "react";

const Exercise4 = () => {
  //array
  const colors = ["red", "blue", "yellow"];

  console.log(colors);
  // use array push()
  const fruits = ["apple", "banana"];
  fruits.push("mango");
  console.log(fruits);
  // use array pop()
  const int = [40, 20, 30];
  int.pop();
  console.log(int);
  // use array shift()
  const sub = ["english", "hindi"];
  sub.shift();
  console.log(sub);
  // use array unshift()
  const subject = ["hindi", "maths", "english"];
  subject.unshift("english");
  console.log(subject);
  //object
  // object code
  const person = {
    name: "preet",
    age: 21,
    isStudent: false,
  };
  console.log(person.name);
  console.log(person["age"]);
  person.age = 22;
  person.city = "dasuya";
  console.log("updated age:", person.age);
  console.log("updated city:", person.city);
  //array methods
  //use array map()
  const num = [1, 2, 3];
  const doubled = num.map((num) => num * 2);

  console.log(doubled);
  // use array filter()
  const numbeers = [1, 2, 3, 4, 5];
  const evens = numbeers.filter((num) => num % 2 === 0);
  console.log(evens);
  //use array reduce()
  const number = [1, 2, 3, 4];
  const sum = number.reduce((acc, num) => acc + num, 0);
  console.log(sum);

  return (
    <div>
      <h2>Exercise4</h2>
    </div>
  );
};

export default Exercise4;

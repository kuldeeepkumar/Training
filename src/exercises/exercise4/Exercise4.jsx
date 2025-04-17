import React from "react";

const Exercise4 = () => {
  //1
  //array
  console.log(" array declaration => 1");
  const Fruits = ["Apple", "banana", "cherry"];
  console.log(Fruits);

  //2
  //push()
  console.log(" declaration push() => 2");

  const Color = ["Red", "Yellow", "Black"];
  Color.push("Pink");
  console.log(Color);
  //3
  //pop()
  console.log("declaration pop() => 3");
  const age = ["65", "76", "87"];
  age.pop();
  console.log(age);
  //4
  // shift()
  // const sub = ["hindi", "engish", "maths"];
  //sub.shift();
  //console.log(sub);

  //5
  // unshift()
  console.log(" declaration = 5 ");

  const sub = ["hindi", "english", "maths"];
  sub.unshift("maths");
  console.log(sub);

  //6
  //objects
  console.log("object = 6 ");
  const person = {
    name: "gagan",
    age: "19",
    isstudent: true,
  };
  console.log(person.name);
  console.log(person["age"]);

  person.age = 20;
  person.city = "New york";
  console.log(person);

  //7
  //array
  //map()
  console.log("array = 7");
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);

  console.log(doubled);

  //8
  //filter()
  console.log("filter()array = 8 ");
  const num = [1, 2, 3];
  const evens = num.filter((num) => num % 2 === 0);
  console.log(evens);

  //9
  //reduce()
  console.log("reduce() array =9");
  const number = [1, 2, 3, 4];
  const sum = number.reduce((acc, num) => acc + num, 0);
  console.log("sum");

  return <div>Exercise4</div>;
};

export default Exercise4;

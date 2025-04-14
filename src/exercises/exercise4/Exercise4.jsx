import React from "react";

const Exercise4 = () => {
  //1. array
  const students = ["Gagan", "Anchal", "Baljit"];
  console.log(students);
  //2. array methods
  //push()
  const color = ["Red", "yellow", "Black"];
  color.push("White");
  console.log(color);

  //pop()
  const name = ["Aryan", "Harpreet", "Simran"];
  name.pop();
  console.log(name);

  //shift()
  // const subjects = ["Maths", "Science", "Hindi"];
  // subjects.shift();
  //console.log(subjects);

  //unshift()
  const subjects = ["Maths", "Science", "Hindi"];
  subjects.unshift("Hindi");
  console.log(subjects);

  //3. objects
  const person = {
    name: "anu",
    age: 21,
    isStudent: false,
  };
  console.log(person.name);
  console.log(person["age"]);
  person.age = 22;
  person.city = "dasuya";
  console.log("updated age:", person.age);
  console.log("updated city:", person.city);

  // array methods
  //4. map()
  const numbers = [1, 2, 3];
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  //filter()
  const num = [1, 2, 3, 4];
  const evens = num.filter((num) => num % 2 == 0);
  console.log(evens);

  //reduce()
  const number = [1, 2, 3, 4, 5];
  const sum = number.reduce((acc, num) => acc + num, 0);
  console.log(sum);

  return <div>Exercise4</div>;
};

export default Exercise4;

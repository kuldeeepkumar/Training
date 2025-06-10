import React from "react";

const Exercise4 = () => {
  //Introduction to Arrays in Javascript

  console.log("Given Array");

  const fruits = ["Apple", "Banana", "Cherry"];
  console.log(fruits);

  //push()
  console.log("After push()");

  fruits.push("Mango");
  console.log(fruits);

  //pop()
  console.log("After pop()");

  fruits.pop();
  console.log(fruits);

  //shift()
  console.log("After shift()");

  fruits.shift();
  console.log(fruits);

  //unshift()
  console.log("After unshift()");

  fruits.unshift("orange");
  console.log(fruits);

  //Objects and Properties

  const person = {
    name: "komal",
    age: 20,
    isStudent: false,
  };
  console.log(person.name);
  console.log(person["age"]);

  person.age = 21;
  person.city = "New York";
  console.log(person.age);
  console.log(person.city);

  //Array Methods-map,filter,reduce

  //map()

  console.log("map()");
  const numbers = [1, 2, 3, 4];
  const square = numbers.map((num) => num * 2);
  console.log(square);

  //filter()

  console.log("filter()");
  const array = [1, 2, 3, 4, 5];
  const evens = array.filter((num) => num % 2 === 0);
  console.log(evens);

  //reduce()

  console.log("reduce()");
  const digits = [1, 2, 3, 4, 5];
  const sum = digits.reduce((acc, digit) => acc + digit, 0);
  console.log(sum);

  const AllMethods = () => {
    const months = ["March", "jan", "Feb", "Dec"];
    months.sort();
    console.log(months);
    const array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);

    //Array.from()
    console.log(Array.from("foo"));
    console.log(Array.from([1, 2, 3], (x) => x + x));

    //Array.isArray()
    console.log(Array.isArray([1, 3, 5]));
    console.log(Array.isArray("[]"));
    console.log(Array.isArray(new Array(5)));
    console.log(Array.isArray(new Int16Array([15, 33])));

    //Array.of()
    console.log(Array.of("foo", 2, "bar", true));
    console.log(Array.of());

    //Array.prototype.at()
    const array2 = [5, 12, 8, 130, 44];
    let index = 2;
    console.log(`An index of ${index} returns ${array2.at(index)}`);
    index = -2;
    console.log(`An index of ${index} returns ${array2.at(index)}`);

    //Array.prototype.concat()
    const array3 = ["a", "b", "c"];
    const array4 = ["d", "e", "f"];
    const array5 = array3.concat(array4);
    console.log(array5);

    return <div>AllMethods</div>;
  };

  return <div>Exercise4</div>;
};

export default Exercise4;

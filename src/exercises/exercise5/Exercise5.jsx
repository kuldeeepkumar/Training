import React from "react";

const Exercise5 = () => {
  // ===============================
  // 1. null, undefined, and NaN
  // ===============================

  // --- null example ---
  let car = null; // intentionally no value
  console.log("null example:", car); // null
  console.log("typeof null:", typeof car); // "object" (quirk in JS)

  // --- undefined example ---
  let bike; // declared but not assigned
  console.log("undefined example:", bike); // undefined

  function greet() {
    console.log("Hello!");
  }
  let result = greet(); // function doesn't return anything
  console.log("Function return:", result); // undefined

  // --- NaN example ---
  let x = 0 / 0;
  console.log("NaN example:", x); // NaN

  let y = parseInt("hello");
  console.log("NaN from parseInt:", y); // NaN
  console.log("typeof NaN:", typeof NaN); // "number"
  console.log("NaN === NaN:", NaN === NaN); // false

  // ===============================
  // 2. Destructuring (arrays & objects)
  // ===============================

  // --- Array Destructuring ---
  const colors = ["red", "green", "blue"];
  const [firstColor, secondColor, thirdColor] = colors;
  console.log("Array Destructuring:", firstColor, secondColor, thirdColor);

  // Skipping elements
  const numbers = [1, 2, 3, 4];
  const [a, , c] = numbers;
  console.log("Skipping in array:", a, c);

  // Using rest in array
  const fruits = ["apple", "banana", "cherry"];
  const [f1, ...otherFruits] = fruits;
  console.log("Rest in array:", f1, otherFruits);

  // --- Object Destructuring ---
  const person = { name: "Alice", age: 30, job: "Developer" };
  const { name, age } = person;
  console.log("Object Destructuring:", name, age);

  // Renaming variables
  const { name: userName, age: userAge } = person;
  console.log("Renamed variables:", userName, userAge);

  // Default value
  const { city = "Unknown" } = person;
  console.log("Default value:", city);

  // Nested destructuring
  const user = {
    id: 1,
    profile: {
      username: "john_doe",
      email: "john@example.com",
    },
  };
  const {
    profile: { username },
  } = user;
  console.log("Nested destructuring:", username);

  // ===============================
  // 3. Spread Operator and Rest Parameter
  // ===============================

  // --- Spread Operator with arrays ---
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log("Spread arrays:", arr2);

  // --- Spread Operator with objects ---
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 };
  console.log("Spread objects:", obj2);

  // --- Spread in function call ---
  const nums = [10, 20, 30];
  function sum(a, b, c) {
    return a + b + c;
  }
  console.log("Spread in function call:", sum(...nums));

  // --- Rest parameter in function ---
  function logAll(...args) {
    console.log("Rest parameter function:", args);
  }
  logAll(1, 2, 3, 4);

  // --- Rest in destructuring ---
  const [first, ...rest] = [10, 20, 30, 40];
  console.log("Rest in destructuring:", first, rest);

  // ===============================
  // 4. Scope and Closures
  // ===============================

  // --- Global Scope ---
  let globalVar = "I am global";
  function showGlobal() {
    console.log("Accessing globalVar:", globalVar);
  }
  showGlobal();

  // --- Local Scope ---
  function showLocal() {
    let localVar = "I am local";
    console.log("Inside function:", localVar);
  }
  showLocal();
  // console.log(localVar); // Uncommenting this would throw an error

  // --- Lexical Scope ---
  function outerLexical() {
    let outerVar = "I'm from outer";

    function innerLexical() {
      console.log("Lexical scope:", outerVar);
    }

    innerLexical();
  }
  outerLexical();

  return (
    <div>
      <h1>Exercise5</h1>
    </div>
  );
};
export default Exercise5;

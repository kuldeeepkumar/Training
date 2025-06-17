import React from "react";

const Exercise9 = () => {
  // ---------------------------------------------Add commentMore actions
  // Common JavaScript Errors Examples
  // ---------------------------------------------

  // 1. Syntax Error (Uncomment to see the error)
  // console.log("Hello World"; // SyntaxError

  // 2. Reference Error (Uncomment to see the error)
  // console.log(myVar); // ReferenceError

  // 3. Type Error (Uncomment to see the error)
  // const num = 10;
  // num.toUpperCase(); // TypeError

  // 4. Range Error (Uncomment to see the error)
  // let arr = new Array(-1); // RangeError

  // ---------------------------------------------
  // try...catch Usage
  // ---------------------------------------------

  function errorHandlingExample() {
    try {
      let result = someFunction(); // someFunction is not defined
      console.log(result);
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  }

  errorHandlingExample();

  // ---------------------------------------------
  // try...catch with finally
  // ---------------------------------------------

  function tryCatchFinallyExample() {
    try {
      let x = y + 1; // y is not defined
    } catch (err) {
      console.log("Caught error:", err.message);
    } finally {
      console.log("This will always run.");
    }
  }

  tryCatchFinallyExample();

  // ---------------------------------------------
  // Using console.log() for Debugging
  // ---------------------------------------------

  const user = { name: "Alice", age: 25 };
  console.log("User data:", user);

  function greet(name) {
    console.log("Inside greet function");
    return "Hello, " + name;
  }

  console.log(greet("Alice"));

  return <div>Exercise9</div>;
};

export default Exercise9;

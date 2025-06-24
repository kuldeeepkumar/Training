import React from "react";

const PassingArguments = () =>  {
  // Function that accepts a custom argument
  const greetUser = (userName) => {
    alert(`Hello, ${userName}!`);
  };

  return (
    <div>
      <h2>Passing Arguments Example</h2>

      {/* Passing argument using arrow function */}
      <button onClick={() => greetUser("priya")}>Greet priya</button>

      {/* Another example with a different name */}
      <button onClick={() => greetUser("nandini")}>Greet nandini</button>
    </div>
  );
}

export default PassingArguments;
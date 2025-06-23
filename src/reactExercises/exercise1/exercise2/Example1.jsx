import React, { useState } from "react";

const Example1 = () => {
  //Example1 : Counter Component

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2> Counter Example </h2>
      <p>Current count:{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Example1;

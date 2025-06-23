import React, { useState } from "react";          

const Example1 = () => {
  // ----------- Example 1: Counter Component -----------

  // Declare a state variable 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increment = () => {
    // Updating the state using setCount
    setCount(count + 1);
  };

  // Function to decrease the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Current Count: {count}</p>

      {/* Button to increase count */}
      <button onClick={increment}>Increase</button>

      {/* Button to decrease count */}
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default Example1;

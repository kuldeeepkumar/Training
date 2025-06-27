import React, { useEffect, useState } from "react";

function UpdateExample() {
  const [count, setCount] = useState(0);

  // This useEffect runs every time `count` changes

  useEffect(() => {
    console.log(" Component updated - Count:", count);
  }, [count]); // dependency array with `count` causes effect to run on count change

  return (
    <div>
      <h2>Updating Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}
export default UpdateExample;
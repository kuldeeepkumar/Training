import React from "react";

const Encapsulation = () => {
  // =====================================
  // 3. Data Encapsulation using IIFE
  // =====================================

  const counter = (function () {
    // Private variable
    let count = 0;

    // Public methods
    return {
      increment: function () {
        count++;
        console.log("Counter incremented to:", count);
      },
      decrement: function () {
        count--;
        console.log("Counter decremented to:", count);
      },
      getCount: function () {
        return count;
      },
    };
  })();

  counter.increment(); // Counter incremented to: 1
  counter.increment(); // Counter incremented to: 2
  counter.decrement(); // Counter decremented to: 1
  console.log("Current count (public method):", counter.getCount()); // Output: 1
  // console.log(counter.count); // Undefined: 'count' is private

  return <div>Encapsulation</div>;
};
export default Encapsulation;
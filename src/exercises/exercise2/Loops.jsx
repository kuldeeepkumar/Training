import React from "react";

const Loops = () => {
  // For Loop Example
  for (let i = 0; i < 5; i++) {
    console.log("iteration number:", i);
    // While Loop Example
    let j = 0;
    while (j < 5) {
      console.log("iteration number:", j);
      j++;
    }
    // Do While Loop Example
    let k = 0;

    do {
      console.log("iteration number:", k);
      k++;
    } while (k < 5);
    // Foreach Loop Example
    let fruits = ["apple", "banana", "cherry"];
    fruits.forEach((fruit) => {
      console.log(fruit);
    });
    // break and continue Example
    for (let l = 0; l < 5; l++) {
      if (l === 2) {
        continue; // Skip the rest of the loop when l is 2
      }
      if (l === 4) {
        break; // Exit the loop when l is 4
      }
      console.log("iteration number:", l);
    }
  }
  return (
    <div>
      <h1>Loops Exercise</h1>
      {/* Add your loop examples here */}
    </div>
  );
};

export default Loops;

import React from "react";

export const TryCatchs = () => {
  try {
    //  Code that might throw an error
    let result = riskyFunction();
    console.log(result);
  } catch (error) {
    // Code to run if an error happens
    console.error("Something went wrong:", error.message);
  }

  try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Cannot divide by zero");
    }
    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }
  return <div>TryCatchs</div>;
};

import React from "react";

const TryCatch = () => {
  // ===============================
  // Try/Catch code is starting here
  // ===============================

  try {
    let result = riskyFunction(); // This function is not defined, it will throw an error
    console.log("Result:", result);
  } catch (error) {
    // code to run if an error occurs
    console.error("Something went Wrong:", error.message);
  }

  //   Example with its use case

  try {
    let result = 10 / 0; // This will throw an error (division by zero)
    if (!isFinite(result)) {
      throw new Error("Cannot divide by zero");
    }
  } catch (err) {
    console.log("Error:", err.message);
  }

  return <div>TryCatch</div>;
};

export default TryCatch;

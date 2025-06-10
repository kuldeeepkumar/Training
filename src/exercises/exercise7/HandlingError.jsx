import React from "react";

const HandlingError = () => {
  try {
    let result = riskyFunction();
    console.log(result);
  } catch (error) {
    console.error("something went wrong", error.message);
  }

  try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("cannot divide by zero");
    }
    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }
  return <div>HandlingError</div>;
};

export default HandlingError;

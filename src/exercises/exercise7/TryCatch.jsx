import React from "react";

const TryCatch = () => {
  try {
    let result = riskyFunction();
    console.log(result);
  } catch (error) {
    console.log("something went wrong:", error.message);
  }
  //example use case
  try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("cannot divide by zero");
    }
    console.log(result);
  } catch (err) {
    console.log("error:", err.message);
  }
  return <div>TryCatch</div>;
};

export default TryCatch;

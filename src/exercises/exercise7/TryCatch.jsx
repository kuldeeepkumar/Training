import React from "react";
console.log("Try,Catch");

const TryCatch = () => {
  try {
    let result = riskyFunction(); 
    console.log(result);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }

  //Example use case
  try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("cannot divide by zero");
    }

    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }

  return <div>TryCatch</div>;
};

export default TryCatch;

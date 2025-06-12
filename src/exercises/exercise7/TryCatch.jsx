import React from 'react'

const TryCatch = () => {
    // handling errors with try/catch statement is started here
  try {
    //code that might throw an error

    let result = riskyFunction();
    console.log(result);
  } catch (error) {
    //code to run if an error happens
    console.error("Something went wrong:", error.message);
  }

  //using an example of use case

  try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Cannot divide by zero");
    }
    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }
  return (
    <div>
      
    </div>
  )
}

export default TryCatch

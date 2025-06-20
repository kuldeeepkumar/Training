import React from 'react'

const TryCatch = () => {
   // Example of error handling with async/await
    try{
        let result=10/0;
        if(!isFinite(result)){
            throw new Error("Division by zero is not allowed");
        }   
        console.log(result);
    } catch(error) {
        console.log("Error:", error.message);
    }

  return (
    <div>
      <h1>TryCatch</h1>
    </div>
  )
}

export default TryCatch
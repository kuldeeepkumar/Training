import React from 'react'

const ConditionalStatement = () => {
  let temperature = 30;
  if (temperature > 25) {
    console.log("It's hot outside!"); // This will be executed because 30 > 25
  }

  // Example 2: if-else statement
  temperature = 15;
  if(temperature > 25) {
    console.log("It's hot outside!");
  } else {
    console.log("It's not hot outside."); // This will be executed because 15 is not greater than 25
  }

  // Example 3: if-else if-else statement
  temperature = 20;
  if (temperature > 30) {
    console.log("It's very hot!");
  } else if (temperature > 25) {
    console.log("It's hot outside!");
  } else {
    console.log("It's moderate."); // This will be executed because 20 is neither > 30 nor > 25
  }

  // Example 4: switch statement
  let day = 3;
  let dayName;
  switch (day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday"; // This will be executed because day is 3
      break;
    default:
      dayName = "Unknown day";
  }
  console.log(dayName); // Output: "Wednesday"
  return <div>
    <h1>Conditional Statement</h1>
  </div>;
}

export default ConditionalStatement

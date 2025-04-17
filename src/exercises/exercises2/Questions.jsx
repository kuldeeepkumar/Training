import React from "react";

const Questions = () => {
  //Question1:
  console.log("Question1:");
  let number = 50;
  if (number > 20) {
    console.log("Positive");
  } else if (number < 15) {
    console.log("Zero");
  } else {
    console.log("Negtive");
  }

  //Question2:
  console.log("Question2:");
  let day = 7;
  let dayname;
  switch (day) {
    case 1:
      dayname = "Monday";
      break;
    case 2:
      dayname = "Tuesday";
      break;
    case 3:
      dayname = "Wednesday";
      break;
    case 4:
      dayname = "Thursday";
      break;
    case 5:
      dayname = "Friday";
      break;
    case 6:
      dayname = "Saturday";
      break;
    case 7:
      dayname = "Sunday";
      break;

    default:
      dayname = "Unknown day";
  }
  console.log(dayname);

  //Question3:

  console.log("Question3:");
  for (let i = 1; i <= 10; i++) {
    console.log(i, i * i);
  }

  //Question4:

  console.log("Question4:");

  let num = 1;
  let count = 0;
  while (num <= 50) {
    if (num % 2 == 0) {
      count += num;
    }
    num++;
  }
  console.log("sum of even numbers from 1 to 50:", count);

  //Question 5:
  console.log("Question:");

  const array = [10, 23, 4, 15, 8];
  array.forEach(function (array) {
    if (array % 2 == 0) {
      console.log(array, "is even");
    } else {
      console.log(array, "is odd");
    }
  });
  return <h1>Questions</h1>;
};
export default Questions;

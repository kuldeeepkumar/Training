import React from "react";

const Questions = () => {
  console.log("question 1");

  let number = prompt("enter a number");
  console.log(number);

  if (number > 0) {
    console.log("positive");
  } else if (number === 0) {
    console.log("zero");
  } else {
    console.group("negative");
  }

  console.log("question 2");

  let day = 4;
  let dayName;

  switch (day) {
    case 1:
      dayName = "monday";
      break;

    case 2:
      dayName = "tuesday";
      break;

    case 3:
      dayName = "wednesday";
      break;

    case 4:
      dayName = "thursday";
      break;

    case 5:
      dayName = "friday";
      break;

    case 6:
      dayName = "saturday";
      break;

    case 7:
      dayName = "sunday";
      break;

    default:
      dayName = "Invalid day";
  }

  console.log(dayName);

  console.log("question 3");

  for (let i = 1; i <= 10; i++) {
    console.log(i, i * i);
  }

  console.log("question 4");

  let num = 1;
  let count = 0;
  while (num <= 50) {
    if (num % 2 == 0) {
      count += num;
    }
    num++;
  }
  console.log("sum of  even numbers from 1 to 50:", count);

  console.log("question 5");

  const array = [10, 23, 4, 15, 8];

  array.forEach(function (array) {
    if (array % 2 == 0) {
      console.log(array, "is even");
    } else {
      console.log(array, "is odd");
    }
  });

  return <div>Questions</div>;
};

export default Questions;

import React from "react";

const Questions = () => {
  //Question 1
  // function that checks number is positive or negative or zero
  function checkNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  console.log(checkNumber(5));
  console.log(checkNumber(-5));
  console.log(checkNumber(0));
  //Question 2
  // function that takes a day of week and print the corresponding day
  function getDayName(day) {
    switch (day) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return "Invalid day";
    }
  }
  console.log(getDayName(6));
  console.log(getDayName(1));

  //Question 3
  // program that print first 10 natural numbers and their squares
  for (let i = 1; i <= 10; i++) {
    console.log(`Number: ${i}, Square: ${i * i}`);
  }
  //Question 4
  // while lopps that calculates the sum of even numbers from 1 to 50
  let sum = 0;
  let i = 1;
  while (i <= 50) {
    if (i % 2 === 0) {
      sum += i;
    }
    i++;
  }

  console.log(`Sum of even numbers from 1 to 50: ${sum}`);
  //Question 5
  // given array of numbers , use foreach to print whether the number is even or odd
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
  });

  return (
    <div>
      <h1>Questions</h1>
    </div>
  );
};

export default Questions;

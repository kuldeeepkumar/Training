import React from "react";

const Questions = () => {
  //Question1:

  console.log("Question1");
  let number = 25;
  if (number > 20) {
    console.log("Positive");
  } else if (number < 15) {
    console.log("Zero");
  } else {
    console.log("Negative");
  }

  //Question2:

  console.log("Question2");
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
    case 7:
      dayname = "Sunday";
      break;
  }
  console.log(dayname);

  //Question3:
  console.log("Question3");

  for (let a = 1; a <= 10; a++) {
    console.log(a, a * a);
  }
  //Question4:
  console.log("Question4");

  let num = 1;
  let sum = 0;
  while (num <= 50) {
    if (num % 2 == 0) {
      sum += num;
    }
    num++;
  }
  console.log("sum of evev numbers from 1 to 50 is:", sum);

  //Question5:

  console.log("Question5");
  const numbers = [10, 23, 4, 15, 8];
  numbers.forEach(function (numbers) {
    if (numbers % 2 == 0) {
      console.log(numbers, "is even");
    } else {
      console.log(numbers, "is odd");
    }
  });

  return <div>Questions</div>;
};

export default Questions;

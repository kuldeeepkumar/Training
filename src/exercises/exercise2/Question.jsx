import React from "react";

const Question = () => {
  // q 1: checks no.
  let number = 5;
  if (number == 5) {
    console.log("positive");
  } else if (number <= 5) {
    console.log("negative");
  } else {
    console.log("zero");
  }

  //q 2: print day of week using swith stmt

  let day = 1;
  let dayname;
  switch (day) {
    case 1:
      dayname = "sunday";

      break;
    case 2:
      dayname = "monday";
      break;
    case 3:
      dayname = "tuesday";
      break;
  }

  console.log(dayname);

  //q 3: print first 10 natural numbers
  let n;
  for (n = 1; n <= 10; n++) {
    console.log("first 10 natural number and their squares:", n, n * n);
  }
  //q 4: sum of even numbers 1-50
  let i = 1;
  let sum = 0;
  while (i <= 50) {
    if (i % 2 == 0) {
      sum += i;
    }
    console.log("sum of even numbers 1-50:", sum);
    i++;
  }

  //q 5: print each number in array(even or odd)
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach(function (number) {
    if (number % 2 == 0) {
      console.log(number, "is even");
    } else {
      console.log(number, "is odd");
    }
  });

  return <div>Question</div>;
};

export default Question;

import React from "react";

const Loops = () => {
  // for loop code here

  for (let num = 10; num <= 12; num++) {
    console.log(num);
  }
  //while loop code here

  let a = 10;
  while (a <= 12) {
    console.log(a);
    a++;
  }
  // do while loop code here
  let i = 2;
  do {
    console.log(i);
    i++;
  } while (i < 5);

  // foreach loop code here
  let colors = ["red", "yelow", "green"];

  colors.forEach(function (color) {
    console.log(color);
  });

  //additional control flow concepts

  // break statement

  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);
  }

  //continue statement
  for (let a = 0; a < 5; a++) {
    if (a === 2) {
      continue;
    }
    console.log(a);
  }

  return (
    <div>
      <h2>Loops</h2>
    </div>
  );
};

export default Loops;

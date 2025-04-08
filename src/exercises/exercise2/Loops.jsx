import React from "react";

const Loops = () => {
  // for loop
  console.log("for loop");
  for (let num = 0; num < 5; num++) {
    console.log(num);
  }
  // while loop
  console.log("while loop");
  let i = 1;
  while (i < 6) {
    console.log(i);
    i++;
  }
  // do while loop
  console.log("do while loop");
  let n = 1;
  do {
    console.log(n);
    n++;
  } while (n < 10);

  //for each loop
  console.log("for each loop");
  let students = ["anchal", "gagan", "baljit"];
  students.forEach(function (students) {
    console.log(students);
  });

  return <div>Loops</div>;
};

export default Loops;

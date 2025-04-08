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
    console.log("iteration number :" + i);
    i++;
  } while (i < 5);

  return (
    <div>
      <h2>for Loops</h2>
      <h2>while loops</h2>
    </div>
  );
};

export default Loops;

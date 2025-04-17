import React from "react";

const LoopingStatements = () => {
  for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
  }

  let i = 0;
  while (i < 5) {
    console.log("Iteration number:", i);
    i++;
  }

  let a = 0;
  do {
    console.log("Interation number", a);
    a++;
  } while (a < 5);

  let name = ["gagan", "anchal", "baljit kaur", "harpreet kaur"];
  name.forEach(function (name) {
    console.log(name);
  });

  for (let i = 0; i < 10; i++) {
    if (i == 3) {
      break;
    }
    console.log(i);
  }

  //continue Statement
  console.log("continue Statement");
  for (let b = 1; b < 7; b++) {
    if (b == 3) {
      continue;
    }
    console.log(b);
  }
  return (
    <div>
      <h1>Looping Statements</h1>
    </div>
  );
};

export default LoopingStatements;

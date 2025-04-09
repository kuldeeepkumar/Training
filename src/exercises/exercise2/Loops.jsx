import React from "react";

const Loops = () => {
  console.log("for loop");

  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  // while loop

  console.log("while loop");

  let b = 2;
  while (b < 10) {
    console.log(b);
    b++;
  }

  // do while loop

  console.log("do while loop");
  let c = 3;
  do {
    console.log(c);
    c++;
  } while (c <= 5);

  // forEach loop

  console.log("forEach loop");

  let name = ["anchal", "baljit", "gagan"];
  name.forEach(function (name) {
    console.log(name);
  });

  // break

  console.log("break");

  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);
  }

  console.log("continue");

  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
    console.log(i);
  }

  return (
    <>
      <div>
        <h1>Looping Statements</h1>
      </div>
    </>
  );
};

export default Loops;

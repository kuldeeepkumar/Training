import React from 'react'

const Loops = () => {
// for loop is here
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // while loop is here
  let x = 10;
  while (x < 15) {
    console.log(x);
    x++;
  }
  // do while loop is here
  let a = 20;
  do {
    console.log("iteration number :" + a);
    a++;
  } while (a < 25);
  // for Each loop is here
  let fruits = ["apple", "banaa", "cherry"];

  fruits.forEach(function (fruit) {
    console.log(fruit);
  });

  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }
    console.log(i);
  }
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }
  }


  return (
    <div>
      
    </div>
  )
}

export default Loops

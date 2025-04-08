import React from 'react'

const Loops = () => {
  //for loop is here
  for(let i = 0; i < 5; i++){
    console.log(i);
  }
  //while loop is here
  let x = 10;
  while (x < 15){
    console.log(x);
    x++;
  }
  // do while loop is here
  let a = 20;
  do{
    console.log("Iteration number: " + a);
    a++;
  }while(a < 25);
  //forEach loop is here
  let fruits = ["apple","banana","cherry"];
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  //break statement is here
  for(let y = 10; y < 15; y++){
  if (y=== 13) {
    break;
  }
  console.log(y);
  }
  //continue statement is here
  for(let b = 20; b < 25; b++){
    if (b === 22){
      continue;
    }
    console.log(b);
  }
    return (
    <div>Loops</div>
  )
}

export default Loops
import React from "react";

const LoopingStatements = () => {
  // for loop code is here
  for(let i=0; i<5; i++){
    console.log("Iteration number"+ i);
  }
  

  //while loop code is here
  let j=0;
  while(j < 5){
    console.log("Ietration number:"+j);
    j++;
  }

  //do while loop code is here
  let i=0;
  do{
    console.log("Ietration number:"+i);
    i++;

  }while(i<5);



  //foreach loop code is here 
  let fruits=["apple","banana","mango"];
  fruits.forEach(function (fruits) {
    console.log(fruits);
 });


  return (
    <>
      <div>
        <h1>Looping Statements</h1>
      </div>
    </>
  );
};

export default LoopingStatements;

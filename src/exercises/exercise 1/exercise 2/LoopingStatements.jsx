import React from 'react'

const LoopingStatements = () => {

  // Code is for for loop
  
    for(let i=1;i<=25;i++)
    {
      console.log("iteration number: "+i);
    }
    //code for while loop
    let i=0;
    while(i<10){
      console.log("iteration number: " + i);
      i++;
    }
    //code for do while loop
     i=0;
    do {
      console.log("iteration number: " + i);
      i++;
      } while(i<5);
      //code for foreach
      let colors=["red","blue","orange"];
      colors.forEach(function(colors){
        console.log(colors);
      });
  
   return(
  <>
  <div> Looping Statements</div>
  
  </>
   )
  }
export default LoopingStatements

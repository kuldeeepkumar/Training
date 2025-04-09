import React from 'react'

const LoopingStatements = () => {

    //code is for for loop 

    for(let i=1;i<10;i++)
    {
        console.log("iteration number:"+i);
    }
    // code is for while loop 

    let i=1;
    while(i<5){
        console.log("iteration number:"+i);
        i++;
    }
  // code for do while loop 
  
  do {
    console.log(i);
    i++;
  } while (i<10);
  // code for foreach loop

  let sum = 0;
const numbers = [65, 44, 12, 4,8];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(numbers);

   return (
    <>
    <div>LoopingStatements</div>
    </>
    
  )
}

export default LoopingStatements
import React from 'react'

const Loopingstatement = () => {
    // code is for loop
     for(let i=1;i<=25;i++)
    {
        console.log("lteration number:"+1);
    }
    //code is for while loop

    let i=1;
    while(i<10 ){

        console.log("lteration number:"+1)
        i++;
    }
  //code is for do while loop
       i = 0;
      do{
         console.log("lteration number:"+i);
         i++;
      }while (i <5);
      
//code for foreach loop 
 let sum = 0;
const numbers = [56,40,23,9,10];
 numbers.forEach(myfunction);

 function myfunction(item){
  sum +=item;
 }
 console.log(numbers);


  return (
    <>
    <div>Loopingstatement</div>
    
    </>
  )
}

export default Loopingstatement
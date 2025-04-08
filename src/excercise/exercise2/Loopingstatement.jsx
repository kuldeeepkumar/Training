import React from 'react'

const Loopingstatement = () => {
    // code is for loop
     for(let i=1;i<=10;i++)
    {
        console.log("lteration number:"+1);
    }
    //code is for while loop

    let i=1;
    while(i<5){

        console.log("lteration number:"+1)
        i++;
    }
  //code is for do while loop
      let i = 0;
      do{
         console.log("lteration number:"+i);
         i++;
      }while (i <5);
      


  return (
    <>
    <div>Loopingstatement</div>
    
    </>
  )
}

export default Loopingstatement
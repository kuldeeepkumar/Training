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
 
    
    



  return (
    <>
    <div>LoopingStatements</div>
    </>
    
  )
}

export default LoopingStatements
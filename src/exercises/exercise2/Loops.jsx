import React from 'react'

const Loops = () => {
    for(let i=1;i<=10;i++)
    {
       console.log(i);
    }
    let j=0;
while(j<5){
    console.log("iteration number:"+j);
    j++;
}
let k=0;
do{
    console.log("iteration number:"+k);
        k++;
    }while(k<5);
   
  return (
    <div>
          <h1>Loops</h1>
    </div>
  )
}

    
    export default Loops

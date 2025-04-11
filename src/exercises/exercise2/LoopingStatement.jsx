import React from 'react'

const LoopingStatement = () => {

    //code is for each loop

    for(let i=1;i<10;i++){
        console.log("iteration number:"+i);
    }

    //code is for while loop

    let i=1;
    while(i<5){
        console.log("iteration number:"+i);
        i++;
    }

    //CODE IS DO WHILE LOOP

   
    do{
        console.log("iteration number:"+i);
        i++;
        
    }while(i<5);
    //code for foreach loop

    let fruits=["apple","mango","cherry"];
    fruits.forEach(function(fruit){
        console.log(fruit);
    });

  return (
    <div>LoopingStatement</div>
  )
}

export default LoopingStatement
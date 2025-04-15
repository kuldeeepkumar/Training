import React from 'react'

const AdditionalFlowcontrol = () => {
  //code for break statement 
    for(let i=0; i<5; i++){
        if(i==3){
            break;

        }
        console.log(i);
    }
    //code for continue
    for (let i=0;i<5;i++){
      if(i==2){
        continue;
      }
       console.log(i);
    }
  return (
    <div>AdditionalFlowcontrol</div>
  )
}

export default AdditionalFlowcontrol
import React from 'react'
import AdditionalControlFlowconcepts from './AdditionalControlFlowconcepts';

const AdditionalControlFlowconcepts = () => {
    for (let i=0; i<5; i++){
        if(i===3){
            break; // exit loop when i is 3
        }
        console.log(i);
      }

      //continue statement code is here
      for (let i=0; i< 5; i++)
      {
        if (i===2){
          continue; // skip when i is 2
        }
        console.log(i);
      }
  return (
    <div>
      <h1>AdditionalControlFlowconcepts</h1>
    </div>
  )
}

export default AdditionalControlFlowconcepts

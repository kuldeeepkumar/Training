import React from 'react'

const WhileLoop = () => {
    let i=0;
    while(i<=6)
    {
        console.log("iteration number: " , +i);
        i++;
    }
  return (
    <div>WhileLoop</div>
  )
}

export default WhileLoop
import React from 'react'

const Allmethods = () => {

    const array1=[5,12,8,130,44];

    let index = 2;

    console.log(`an index of ${index}returns ${array1.at(index)}`);
    index=-2;
    console.log(`an index of ${index}returns ${array1.at(index)}`);

    

    

    
  return (
    <div>
      <h1>Allmethods</h1>
    </div>
  )
}

export default Allmethods

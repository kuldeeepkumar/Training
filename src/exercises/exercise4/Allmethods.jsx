import React from 'react'

const Allmethods = () => {

  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);
  
  console.log(array3);
  
  
  
  
  const num = ["a", "b", "c"];
  
  const iterator1 = array1.entries();
  
  console.log(iterator1.next().value);
  
  console.log(iterator1.next().value);
  
  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "Feb");
  
  console.log(months);
  
  
  months.splice(4, 1, "May");
  
  console.log(months);
  
      
  
  return (
    <div>Allmethods</div>
  )
}

export default Allmethods
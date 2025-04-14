import React from 'react'

const Allmethods = () => {
   
  const array1=[5,12,8,130,44];

  let index = 2;

  console.log(`an index of ${index}returns ${array1.at(index)}`);
  index=-2;
  console.log(`an index of ${index}returns ${array1.at(index)}`);
 

const months = ["march","jan","feb","dec"];
months.sort();
console.log(months);

//array prototype concat()
const array2 = ["a","b","c"];
const array3 = ["d","e","f"];
const array4=array2.concat(array3);
console.log(array4);

// array prototype cpywithin()
const array5 = ["a","b","c","d","e"];
console.log(array5.copyWithin(0,3,4));
console.log(array5.copyWithin(1,3));

  return (
    <div>Allmethods</div>
  )
}

export default Allmethods
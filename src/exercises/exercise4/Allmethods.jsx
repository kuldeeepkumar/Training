import React from 'react'

const Allmethods = () => {
  // array prototypes  
  const array1 = [5, 12, 8, 130, 44];

  let index = 2;
  
  console.log(`An index of ${index} returns ${array1.at(index)}`);
  index = -2;
  
  console.log(`An index of ${index} returns ${array1.at(index)}`);
  
// array prototypes concat()
 const array2 = ["a", "b", "c"];
 const array3= ["d", "e", "f"];
 const array4 = array2.concat(array3);
 console.log(array4);

//  array prototype copywithin()

const array5 = ["a", "b", "c", "d", "e"];
console.log(array5.copyWithin(0, 3, 4));
console.log(array5.copyWithin(1, 3));


// Array prototype.entries()
const array6= ["a", "b", "c"];
const iterator1 = array6.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// Array prototype.every()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array7 = [1, 30, 39, 29, 10, 13];
console.log(array7.every(isBelowThreshold));  

//  Array prototype.fill()
const array8 = [1, 2, 3, 4];

    // Fill with 0 from position 2 until position 4
    console.log(array8.fill(0, 2, 4));
    // Expected output: Array [1, 2, 0, 0]

    // Fill with 5 from position 1
   console.log(array8.fill(5, 1));
   // Expected output: Array [1, 5, 5, 5]

     console.log(array8.fill(6));
    // Expected output: Array [6, 6, 6, 6]


// Array prototype.filter()
    
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);

// Array prototype.find()
const array9 = [5, 12, 8, 130, 44];
const found = array9.find((element) => element > 10);
console.log(found);

// Array prototype.findIndex()

const array10 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array10.findIndex(isLargeNumber));
  return (
    <div>Allmethods</div>
  )
}

export default Allmethods

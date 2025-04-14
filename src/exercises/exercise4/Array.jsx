import React from 'react'

const Array = () => {
    
    const fruits =["apple" , "banana" , "cherry"];

    fruits.push("orange");
    //["apple","banana","cherry","orange"]
    console.log(fruits)

    fruits.pop("orange");
     //["apple","banana","cherry"]
     console.log(fruits)

     fruits.shift();
     //["banana","cherry"]
     console.log(fruits)
      fruits.unshift("mango")
      //["mango","banana","cherry"]
      console.log(fruits)

  return (
    <div>
      <h1>Array</h1>
    </div>
  )
}

export default Array

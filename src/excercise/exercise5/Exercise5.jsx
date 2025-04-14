import React from 'react'

const Exercise5 = () => {
    let a = null;
    console.log(a);
    console.log(typeof a);

    let car = null;
    console.log(car);
    console.log(typeof car);

    let bike;
    console.log(bike);

    function greet(){
        console.log("Hello!");
    
    }
    let result = greet();
    console.log(result);
 // NaN(NOT -A-NUMBER) 
 
 let x = 0/0;
 console.log(x);

 let y =  parseInt("hello");
 console.log(y);

 console.log(typeof NaN);
 console.log(NaN === NaN);

    
  return (
    <div>Exercise5</div>
  )
}

export default Exercise5
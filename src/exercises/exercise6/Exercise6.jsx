import React from 'react'

const Exercise6 = () => {
   //Global scope

    let globalvar = "i sam global";

    function test(){
      console.log(globalvar);

    }
    test();
    console.log(globalvar);

    //lexical scope

    function outer() {
      let outerVar = "I'm from outer";

      function inner() {
        console.log(outerVar);

      }
    inner();

    }
    outer();

   //closures

   function outer() {
    let count = 0;

    return function inner() {
      count++;
      console.log("count is:",count);

    };
   }
   const counter = outer();
   counter();
   counter();
   counter();

   //real-world Use  case of closures

   function makeMULTIPLIER(factor) {
    return function(num) {
      return num * factor;
    };
   }
    
  return (
    <div>Exercise6</div>
  )
}

export default Exercise6
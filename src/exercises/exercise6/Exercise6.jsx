import React from 'react'

const Exercise6 = () => {
    //Global scope
  let globalvar = " I am global";
  function test() {
    console.log(globalvar);
  }
  test();
  console.log(globalvar);
  // Local function
  function test1() {
    let localvar = " I am local";
    console.log(localvar);
  }
  test1();
  // console.log(localvar);

  //lexcial scope (static scope)
  function outer() {
    let outervar = " I'm from outer";
    function inner() {
      console.log(outervar);
    }
    inner();
  }
  outer();

  //lexical scope(closures)
  function outer1() {
    let count = 0;
    return function inner() {
      count++;
      console.log("count is:", count);
    };
  }
  const counter = outer1();
  counter();
  counter();
  counter();
  //Real-world use case of closures
  function makeMultiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  const double = makeMultiplier(2);
  console.log(double(5));
 return (
    <div>
      
    </div>
  )
}

export default Exercise6

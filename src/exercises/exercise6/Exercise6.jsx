import React from 'react'
// import Exercise6 from './Exercise6';

const Exercise6 = () => {
  //global scope
  let globalVar = "i am global";

  function test() {
    console.log("global var is here", globalVar);
  }
  test();
  console.log(globalVar);

  //local scope
  function test1() {
    let localVar = "i am local";
    console.log("local var is here", localVar);
  }
  test1();
  //   console.log(localVar);

  //static scope

  function outer() {
    let outerVar = "i am from outer";
    function inner() {
      console.log("outer var is", outerVar);
    }
    inner();
  }
  outer();

  //closures

  function outer1() {
    let count = 0;
    return function inner() {
      count++;
      console.log("count is here:", count);
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
  console.log("double is :", double(5));

  return <div>Exercise6</div>;
}

export default Exercise6

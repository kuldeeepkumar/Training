import React from 'react'

const Exercise6 = () => {

// Global scope
let globalVar = "I am global";
function test() {
  console.log(globalVar);
}
test();
console.log(globalVar);
// Local function
function test() {
  let localVar = " I am local";
  console.log(localVar);
}
test();
// console.log(localVar);

// lexical scope (static scope)
function outer() {
  let outerVar = "I'm from outer";
  function inner() {
    console.log(outerVar);
  }
  inner();
}
outer();

//  lexical scope (Closures)
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

// Real-world usse case of closures
function makeMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = makeMultiplier(2);
console.log(double(5));


  return (
    <div>Exercise6</div>
  )
}

export default Exercise6
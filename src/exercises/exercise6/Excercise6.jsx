import React from "react";

const Excercise6 = () => {
  //1
  //Global Scope(outside a function)
  console.log("Global Scope => 1 ");
  let globalVar = "Iam global";
  function test() {
    console.log(globalVar);
  }
  test();
  console.log(globalVar);

  //2
  //Local Scope(inside a function)
  console.log("Local Scope => 2 ");
  function show() {
    let localVar = " i am local";
    console.log(localVar);
  }
  show();
  // console.log(localVar;)

  3;
  // lexicl scope(static Scope)
  console.log("Lexical Scope => 3 ");
  function outer() {
    let outerVar = " I' am from outer";
    function inner() {}
    inner();
  }
  outer();

  //4
  //closures
  console.log("Closures");
  function outer1() {
    let count = 0;
    return function inner() {
      count++;
      console.log("Count is :", count);
    };
  }
  const counter = outer1();
  counter();
  counter();
  counter();

  //5
  //real world use case of closures
  console.log(" Real world use case of closures => 5");
  function makeMultiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  const double = makeMultiplier(2);
  console.log(double(5));
  return <h1>Exercise6</h1>;
};

export default Excercise6;

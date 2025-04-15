import React from "react";

const Exercise6 = () => {
  //========================
  //global var
  //========================
  let globalvar = "i am global";
  function test() {
    console.log("global variable here:", globalvar);
  }
  test();
  console.log("global var here:", globalvar);
  //==========================
  //local var
  //==========================
  function one() {
    let localvar = "i am local variable";
    console.log("local variable here:", localvar);
  }
  one();
  //console.log(localvar);// error
  //=======================
  //lexical var
  //=======================
  function outer() {
    let outervar = "i'm from outer";
    function inner() {
      console.log("outer var here:", outervar);
    }

    inner();
  }

  outer();
  //==================
  //closures var
  //==================
  function outervar() {
    let count = 0;
    return function inner() {
      count++;
      console.log("count is:", count);
    };
  }

  const counter = outervar();
  counter();
  counter();
  counter();

  //=======================================
  //real world use case of closures
  //=======================================
  function makeMultiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  const double = makeMultiplier(2);
  console.log(double(5));

  return (
    <>
      <h2>Exercise6</h2>
    </>
  );
};

export default Exercise6;

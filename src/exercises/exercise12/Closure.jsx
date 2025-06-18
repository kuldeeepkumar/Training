import React from "react";

const Closure = () => {
  function outerFunction() {
    let outerVariable = "i am from outer scope";

    function innerFunction() {
      console.log(outerVariable);
    }
    return innerFunction;
  }

  const closureExample = outerFunction();
  closureExample();

  return <div>Closure</div>;
};

export default Closure;

import React from 'react'

const Closure = () => {
  // =============================
  // 1. JavaScript Closure Example
  // =============================

  function outerFunction() {
    let outerVariable = "I am from outer scope";

    function innerFunction() {
      console.log("Closure Example:", outerVariable);
    }

    return innerFunction;
  }

  const closureExample = outerFunction();
  closureExample(); // Output: Closure Example: I am from outer scope

  
  return <div>Closure</div>;
}
export default Closure;
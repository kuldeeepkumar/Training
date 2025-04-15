import React from 'react'

const Exercise6 = () => {

    // Global VS Local Scope

    // Global Scope

    let globalVar = "I am global";

    function test() {
        console.log(globalVar);
    }

    test();
    console.log(globalVar);

    // Local Scope

    function test1() {

        let localVar = "I am local";
        console.log(localVar);
    }

    test1();
    // console.log(localVar);

    // Lexical Scope(Static Scope)

    function outer() {
        let outerVar = "I am from outer";

        function inner() {
            console.log(outerVar);
        }

        inner();
    }

    outer();

    // Closures

    function outer1() {
        let count = 0;

        return function inner() {
            count++;
            console.log("Count is:", count);
        };
    }

    const counter = outer1();
    counter();
    counter();
    counter();

    //Real-World Use Case of Closures

    function makeMultiplier(factor) {
        return function(num) {
            return num * factor;
        };
    }

    const double = makeMultiplier(3);
    console.log(double(5));
  return (
    <div>Exercise6</div>
  )
}

export default Exercise6
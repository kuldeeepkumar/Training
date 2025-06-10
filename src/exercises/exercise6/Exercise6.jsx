import React from "react";

let globalVar = "I am global";

// console.log(globalVar);

const Exercise6 = () => {
  // ===============================
  // Scope and Closures
  // ===============================

  // --- Global Scope ---
  function showGlobal() {
    console.log("Accessing globalVar:", globalVar);
  }
  showGlobal();

  // --- Local Scope ---
  function showLocal() {
    let localVar = "I am local";
    console.log("Inside function:", localVar);
  }
  showLocal();
  // console.log(localVar); // Uncommenting this would throw an error

  // --- Lexical Scope ---
  function outerLexical() {
    let outerVar = "I'm from outer";

    function innerLexical() {
      console.log("Lexical scope:", outerVar);
    }

    innerLexical();
  }
  outerLexical();
  return <div>Exercise6</div>;
};

export default Exercise6;

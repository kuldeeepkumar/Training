import React from "react";

const ImmeidiatelyInvokedFunction = () => {

  // 2. IIFE (Immediately Invoked Function)
  // ======================================

  (function () {
    let privateVar = "This is private inside IIFE";
    console.log("IIFE Example:", privateVar);
  })();

  // console.log(privateVar); // Error: privateVar is not defined
  return <div>ImmeidiatelyInvokedFunction</div>;
};

export default ImmeidiatelyInvokedFunction;



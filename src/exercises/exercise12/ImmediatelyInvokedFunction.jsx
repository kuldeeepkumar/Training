import React from "react";

const ImmediatelyInvokedFunction = () => {
  // ======================================
  // 2. IIFE (Immediately Invoked Function)
  // ======================================

  (function () {
    let privateVar = "This is private inside IIFE";
    console.log("IIFE Example:", privateVar);
  })();

  // console.log(privateVar); // Error: privateVar is not defined
  return <div><h1>ImmediatelyInvokedFunction</h1></div>;
};

export default ImmediatelyInvokedFunction;
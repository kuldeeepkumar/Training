import React from 'react'

const ImmediatelyInvokedFunction = () => {

  // ======================================
  // 2. IIFE (Immediately Invoked Function)
  // ======================================

  (function () {
    let privateVar = "This is private inside IIFE";
    console.log("IIFE Example:", privateVar);
  })();

  // console.log(privateVar); // Error: privateVar is not defined
 
  return (
    <div>ImmediatelyInvokedFunction</div>
  )
}

export default ImmediatelyInvokedFunction
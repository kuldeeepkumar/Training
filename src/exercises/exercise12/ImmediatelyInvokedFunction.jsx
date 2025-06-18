import React from "react";

const ImmediatelyInvokedFunction = () => {
  (function () {
    let privateVar = "This is private";
    console.log(privateVar);
  })();

  return <div>ImmediatelyInvokedFunction</div>;
};

export default ImmediatelyInvokedFunction;

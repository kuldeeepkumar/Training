import React from "react";

const Callback = () => {
  //callback code
  function greetuser(name, callback) {
    console.log("hi", name);
    callback();
  }
  function showMessage() {
    console.log("welcome to our website!");
  }
  greetuser("preet", showMessage);

  //example

  function fetchData(callback) {
    setTimeout(() => {
      callback("data is ready!");
    }, 2000);
  }
  fetchData((message) => {
    console.log(message);
  });

  return <div>Callback</div>;
};

export default Callback;

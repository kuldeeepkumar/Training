import React from 'react'

const Callback = () => {
  // Example of a callback function in JavaScriptAdd commentMore actions
  function greetUser(name, callback) {
    console.log("Hi " + name);
    callback();
  }
  function showMessage() {
    console.log("Welcome to the website!");
  }
  greetUser("Alice", showMessage);
  // Example of a callback function with asynchronous operation
  function fetchData(callback) {
    setTimeout(() => {
      callback("DATA IS READY");
    }, 2000);
  }
  fetchData((message) => {
    console.log(message);
  });

  return <div></div>;
}

export default Callback

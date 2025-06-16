import React from 'react'

const callBack = () => {
  // Example of a callback function in JavaScript
  function greetUser(name,callback) {
    console.log("Hi " + name);
    callback();
 }
 function showMessage() {
    console.log("Welcome to the website!");
 }
 greetUser("sumit", showMessage);
  // Example of a callback function with asynchronous operation
  function fetchData(callback) {
    setTimeout(() => {
      callback('DATA IS READY');
    }, 2000);
  }
  fetchData((message) => {
    console.log(message);
  });
  return (
    <div>
      <h1>Callback Example</h1>
    </div>
  )
}

export default callBack

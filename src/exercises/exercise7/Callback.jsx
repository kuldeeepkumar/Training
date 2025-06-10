import React from "react";

const Callback = () => {
  console.log("callback function");

  function greetuser(name, callback) {
    console.log("Hi", name);
    callback();
  }
  function showMessage() {
    console.log("welcome to our website");
  }
  greetuser("Anchal", showMessage);

  console.log("Async example ");

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

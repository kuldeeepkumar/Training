import React from "react";

const Callbacks = () => {
  // call back exercise code is started here
  function greetuser(name, callbacks) {
    console.log("Hi", name);
    callbacks();
  }

  function showMessage() {
    console.log("Welcome to our website");
  }

  greetuser("Alice", showMessage);

  //Async Example for callback using setTimeout method

  function fetchData(callback) {
    setTimeout(() => {
      callback("data is ready !");
    }, 2000);
  }

  fetchData((message) => {
    console.log(message);
  });
  return <div>Callbacks</div>;
};

export default Callbacks;

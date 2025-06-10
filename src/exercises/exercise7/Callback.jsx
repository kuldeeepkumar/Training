import React from "react";

const Callback = () => {
  //1
  function greetUser(name, callback) {
    console.log("Hi", name);
    callback();
  }

  function showMessage() {
    console.log("welcome to our website!");
  }

  greetUser(" Baljit", showMessage);

  //2 with timesout
  function fetchData(callback) {
    setTimeout(() => {
      callback("Data is ready!");
    }, 3000);
  }

  fetchData((message) => {
    console.log(message);
  });

  return <div>Callback</div>;
};

export default Callback;

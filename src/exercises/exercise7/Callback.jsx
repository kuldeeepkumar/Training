import React from "react";

const Callback = () => {
  //callbacks

  function greetUser(name, callback) {
    console.log("Hi", name);
    callback();
  }
  function showMessage() {
    console.log(" welcome to our website!");
  }
  greetUser("gagan", showMessage);

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

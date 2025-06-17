import React from "react";

const Callbacks = () => {
  // Call back exrcise code is started here
  function greetUser(name, callback) {
    console.log("Hi", name);
    callback();
  }

  function showMessage() {
    console.log("welcome to the website");
  }
  greetUser("Kuldeep", showMessage);

  // Async Example for Callback Using setTimeout method

  function fetchData(callback) {
    setTimeout(() => {
      callback("data is ready !");
    }, 2000);
  }

  fetchData((meassage) => {
    console.log(meassage);
  });

  return <div>Callbacks</div>;
};

export default Callbacks;
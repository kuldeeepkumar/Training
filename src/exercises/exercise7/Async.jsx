import React from "react";

const Async = () => {
  // ========================
  // Asynchronous Java Script (Callback)
  // ========================

  function greetUser(name, callback) {
    console.log("Hi " + name);
    callback();
  }
  function showMessage() {
    console.log("Welcome to our Website!");
  }
  greetUser("Muskaan ", showMessage);

  // =======================
  // Async Example:
  // =======================
  function fetchData(callback) {
    setTimeout(() => {
      callback("Data is ready!");
    }, 2000);
  }
  fetchData((message) => {
    console.log(message); //run after 2 seconds
  });

  return <div>Async</div>;
};

export default Async;

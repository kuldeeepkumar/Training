import React from "react";

export const CallBack = () => {
  function greetUser(name, callback) {
    console.log("Hi", name);
    callback();
  }

  function showMessage() {
    console.log("Welcome to our website!");
  }
  greetUser("Aman", showMessage);

  function fetchData(callback) {
    setTimeout(() => {
      callback("Data is ready!");
    }, 2000);
  }
  fetchData((message) => {
    console.log(message);
  });
  return <div>CallBack</div>;
};

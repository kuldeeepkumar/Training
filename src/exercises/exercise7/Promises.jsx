import React from "react";

const Promises = () => {
  let promise = new Promise((resolve, reject) => {
    let sucess = true;
    if (sucess) {
      resolve("Task completed!");
    } else {
      reject("Something went wrong.");
    }
  });
  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  //with setTimeout:
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data feteched after 2 seconds");
      }, 2000);
    });
  }
  fetchData().then((data) => console.log(data));
  return <div>Promises</div>;
};

export default Promises;

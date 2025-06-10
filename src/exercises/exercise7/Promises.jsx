import React from "react";

const Promises = () => {
  let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
      resolve("Task completed");
    } else {
      reject("something went wrong");
    }
  });

  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });

  //with timeout

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched after 2 seconds");
      }, 2000);
    });
  }

  fetchData().then((data) => console.log(data));

  return <div>Promises</div>;
};

export default Promises;

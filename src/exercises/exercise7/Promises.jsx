import React from "react";

const Promises = () => {
  let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
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

  return <div>Promises</div>;
};

export default Promises;

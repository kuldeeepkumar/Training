import React from 'react'

const Promises = () => {
  // Example of a Promise in JavaScriptAdd commentMore actions
  let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
      resolve("Task completed");
    } else {
      reject("Task failed");
    }
  });
  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  // Example of a Promise with an asynchronous operation
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Data fetched after 2 seconds";
        resolve(data);
      }, 2000);
    });
  }
  fetchData().then((data) => console.log(data));
  return (
    <div>
      <h1>Promises Example</h1>
    </div>
  );
}

export default Promises

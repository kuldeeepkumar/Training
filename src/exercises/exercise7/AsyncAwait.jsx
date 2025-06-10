import React from "react";

const AsyncAwait = () => {
  // ===============================
  // Async/Await code is starting here
  // ===============================

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data Loaded");
      }, 2000);
    });
  }
  async function getData() {
    console.log("Wating for the data...");
    const result = await fetchData(); // wait for until the fetchData promise is resolved
    console.log(result);
  }

  getData();

  return <div>AsyncAwait</div>;
};

export default AsyncAwait;

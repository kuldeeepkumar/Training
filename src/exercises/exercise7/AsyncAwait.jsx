import React from "react";

const AsyncAwait = () => {
  async function example() {
    return "Hello";
  }
  example().then((message) => console.log(message));

  // with await:
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data loaded");
      }, 2000);
    });
  }
  async function getData() {
    console.log("Waiting for data...");
    const result = await fetchData();
    console.log(result);
  }
  getData();
  return <div>AsyncAwait</div>;
};

export default AsyncAwait;

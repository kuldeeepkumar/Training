import React from "react";

const AsyncAwait = () => {
  //async
  async function example() {
    return "Hello";
  }
  example().then((message) => console.log(message));

  //with await
  function fetchdata() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("data loaded");
      }, 2000);
    });
  }
  async function getData() {
    console.log("waiting for data....");
    const result = await fetchdata();
    console.log(result);
  }
  getData();
  return <div>AsyncAwait</div>;
};

export default AsyncAwait;

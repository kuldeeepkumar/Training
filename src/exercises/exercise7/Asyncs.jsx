import React from "react";

export const Asyncs = () => {
  async function example() {
    return "Hello";
  }

  example().then((message) => console.log(message));

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data loaded");
      }, 2000);
    });
  }

  async function getData() {
    console.log("waiting for data...");
    const result = await fetchData();
    console.log(result);
  }

  getData();
  return <div>Asyncs</div>;
};

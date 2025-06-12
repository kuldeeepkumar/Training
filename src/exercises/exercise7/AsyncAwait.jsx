import React from 'react'

const AsyncAwait = () => {
 //AsyncAwait statement is started here
  async function example() {
    return "Hello";
  }
  example().then((message) => console.log(message));

  //Async using await

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data loaded");
      }, 2000);
    });
  }

  async function getData() {
    console.log("Waiting for data...");
    const result = await fetchData(); //waits until fetchData resolves
    console.log(result);
  }

  getData();


  return (
    <div>
      
    </div>
  )
}

export default AsyncAwait

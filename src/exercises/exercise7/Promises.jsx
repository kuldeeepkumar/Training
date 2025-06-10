import React from "react";

const Promises = () => {
  // ===============================
  // Promises code is starting here
  // ===============================

  // we have one example of promises here , which is showing pending , Resoved and Rejected states of promises

  let promise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to see the rejected state
    if (success) {
      resolve("Task Copmlete!");
    } else {
      reject("Something Went Wrong!");
    }
  });
  console.log("promise", promise);

  promise
    .then((message) => {
      console.log("Resolved:", message);
    })
    .catch((message) => {
      console.log("Resolved:", message);
    });

  return (
    <>
      <div>
        <h1>Promises</h1>
      </div>
    </>
  );
};

export default Promises;

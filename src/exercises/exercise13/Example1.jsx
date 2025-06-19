import React from "react";

const Example1 = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Post title:", data.title);
    })
    .catch((error) => {
      console.log("fetch error:", error);
    });

  return <div>Example1</div>;
};

export default Example1;

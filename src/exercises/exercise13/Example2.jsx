import React from "react";

const Example2 = () => {
  const newPost = {
    title: "Hello world",
    body: "This is my first post",
    userId: 1
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    bopdy: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Post crested with ID:", data.id);
    })
    .catch((error) => {
      console.log("Error creating post:", error);
    });

  return <div>Example2</div>;
};

export default Example2;

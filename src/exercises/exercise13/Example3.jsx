import React from "react";

const Example3 = () => {
  async function getPost(postId){
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      console.log("Post title:", data.title);
    } catch (error) {
      console.error("error:", error.message);
    }
  }
  getPost(2);

  return <div>Example3</div>;
};

export default Example3;

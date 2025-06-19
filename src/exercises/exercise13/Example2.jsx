import React from 'react'

const Example2 = () => {

 
  // ---------------------------------------------
  // Example 2: POST Request using Fetch API
  // ---------------------------------------------

  // This function creates a new post by sending data to the server
  function createPost() {
    const newPost = {
      title: "Hello World",
      body: "This is my first post",
      userId: 1,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Sending JSON data
      },
      body: JSON.stringify(newPost), // Convert JS object to JSON string
    })
      .then((response) => {
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        console.log("Post created with ID:", data.id); // Show the new post ID
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  }

  createPost();
  
  return (
    <div>Example2</div>
  )
}

export default Example2
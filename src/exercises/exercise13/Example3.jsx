import React from 'react'

const Example3 = () => {

// ---------------------------------------------
  // Example 3: GET Request using async/await
  // ---------------------------------------------

  // This function uses async/await for cleaner syntax
  async function getPost(postId) {
    try {
      // Await the fetch request
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      // Throw an error if response is not ok
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      // Parse JSON
      const data = await response.json();

      // Log the post title
      console.log("Post title (async):", data.title);
    } catch (error) {
      // Catch and log any errors
      console.error("Error:", error.message);
    }
  }

  // Call the function
  getPost(2);

  return (
   <>
    <div>
      Example3
    </div>
   </>
  )
}

export default Example3

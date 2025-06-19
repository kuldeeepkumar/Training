import React from 'react'

const Example1 = () => {

  
        // ---------------------------------------------
        // Example 1: GET Request using Fetch API
        // ---------------------------------------------
      
        // This function fetches a single post from a fake JSON API
        function fetchSinglePost() {
          fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
              // Check if the request was successful
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              // Parse the response body as JSON
              return response.json();
            })
            .then((data) => {
              // Log the title of the post
              console.log("Post title:", data.title);
            })
            .catch((error) => {
              // Handle errors such as network failure
              console.error("Fetch error:", error);
            });
        }
      
        fetchSinglePost();
      
        return (
        <div>Example1</div>
        )
      };
  


export default Example1

import React from 'react'

const AsyncAwait = () => {
    async function example(){
        return "Hello";
    }
    example().then((message)=> console.log(message));
    
    function fetchData(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Data loaded");
                },2000);
    });
        }
        async function getData(){
            console.log("Waiting for data...");
            const result=await fetchData();
            console.log(result);
        }
        getData();
// Example of error handling with async/await
        try{
            let result=10/0;
            if(!isFinite(result)){
                throw new Error("Division by zero is not allowed");
            }   
            console.log(result);
        } catch(error) {
            console.log("Error:", error.message);
        }
  return (
    <div>
      <h1>Async/Await Example</h1>
    </div>
  )
}
export default AsyncAwait

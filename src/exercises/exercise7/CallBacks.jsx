import React from 'react'

const CallBacks = () => {



    function greetUser(name, callback){
        console.log("Hi" , name);
        callback();
    }
    
    function showMessage() {
        console.log("Welcome to our website!");
    }

    greetUser("sheetal", showMessage);

    function fetchData(callback) {
        setTimeout(() => {
            callback("Data is ready!");
        }, 2000);
    }

    fetchData((message) => {
        console.log(message);
    });
  return (
    <div>Callbacks</div>
  )
}



export default CallBacks
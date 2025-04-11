import React from 'react'

const Exercise3 = () => {
  //Function declarations
  function greet(name) {
    return `Hello, ${name}`;
  }
  console.log(greet("jaspreet"));
  sayHello();

  function sayHello(){
    console.log("Hello");
  }
  //Arrow functions
  const add = (a, b) => {
    return a + b;
  };

  console.log(add(4, 7));
  //Implicit Return
  const square = x => x * x;

  console.log(square(4));
 

  // person.greet();
  const person = {
    name: "Jaspreet",
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };

  person.greet();
  //Parameters,Arguments
  function myFun(name) {
    return `Hello, ${name}`;
  }
  console.log(myFun("jass"));
  
function show(x, y) {
    console.log(x,y);
  }

  show(1);
  show(1, 2, 3);
  //Return values
  function multiply(a, b) {
    return a * b;
  }

  const result = multiply(2, 4);
  console.log(result);
  //Default Parameters
  function geet(name = "Guest") {
    return `Welcome, ${name}`;
}

console.log(geet());
//Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
//The arguments Object
function logArgs() {
  console.log(arguments);
}

logArgs(1, 2, 3);


  
 
return (
    <div>Exercise3</div>
  )
}

export default Exercise3
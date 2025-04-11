import React from 'react'



const Exercise3 = () => {
  function greet(name){
    return'Hello,$(simran)';
  }
  console.log(greet("simran"));//output:hello,simran
   sayHello();//output:Hello

   function sayHello(){
    console.log("Hello");
  
   }

   const add = (a,b) => {
    return a+b;
   };
   console.log(add(3,4));//output:7

   const square = x => x*x;
   console.log(square(5));//output:25

   const person = {
    name:"simran",
    greet()  {
      console.log(`hello, i'm ${this?.name}`);
         }
   };
   person.greet();//output:
// Parameters 
   function sayHello(name){
    return `hello,${name}`;
    }
 // Arguments 

   sayHello("Daniel");

   function show(x, y){
    console.log(x,y);
   }
     show(1);
     show(1,2,3);

// Return values 

     function multiply(a,b){
      return a*b;
     }
     const result=multiply(2,4);
     console.log(result);

// Default prameters

     function greet(name ="Guest"){
      return `welcome,${name}`;
     }
     console.log(greet());

 // Rest parameters

     function sum(...numbers){
      return numbers.reduce((total,num)=>total+num,0);
     }
     console.log(sum(1,2,3,4));

 //the arguments

     function logArgs(){
      console.log(arguments);
     }
     logArgs(1,2,3);
  return (
  <div>
    <h1>Exercise3</h1>
  </div>
  )
}

export default Exercise3
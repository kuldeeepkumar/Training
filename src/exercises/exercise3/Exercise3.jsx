import React from 'react'

const Exercise3 = () => {
  //function declaration 
 function greet(name){
  return `Hello, ${name}`;

}
  console.log(greet("taniya"));
  sayHello();

  function sayHello(){
    console.log("Hello");
  }
//Arrow function
const add = (a,b) => {
return a + b;

};
 console.log(add(3,4));

//implicit return  
 const square = x => x * x;
 console.log(square(5));

//no own this
 
 const  person = { 
  name:" preeti",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
 };

 person.greet(); 
 //parameters
 function sayHello1(name){
  return`Hello,${name}`;
 }

 console.log(sayHello1("TANIA"));
 //Arguments 
 sayHello("daniel");
 function show (x,y){
  console.log(x,y);
 }
 show(1);
 show(1,2,3);
 //return values
 function multiply (a,b){
  return a*b;

 }
const result = multiply(2,4);
console.log(result);
//default parameters
function greet1(name = "Guest"){
  return`welcome,${name}`;
}
console.log(greet1());
//rest parameters
function sum(...numbers){
  return numbers.reduce((total,num)=>total +num,0);
}
console.log(sum(1,2,3,4));
//The arguments object
function logargs(){
  console.log(arguments);
}
logargs(1,2,3);
  return (
    <div>Exercise3</div>
  )
}

export default Exercise3
    
 
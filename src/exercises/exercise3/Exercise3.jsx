import React from 'react'

const Exercise3 = () => {
  
  //function declaration 

  function greet(name){
    return`Hello,${name}`;
  }
  console.log(greet("Alice"));//output:Hello,Alice
   
  sayHello();//output:Hello

  function sayHello(){
    console.log("Hello");

  }

  //basic arrow function 

  const add = (a,b) => {
    return a+b;
  } ;
  
  console.log(add(3,4));
   const square = x => x*x;
   console.log(square(5));

   const person = {
    name:"geetika",
    greet()  {
      console.log(`hello,I'm ${this?.name}`);
    
    }
   };
   person.greet();
    function sayHello(name){
      return`Hello,$(name)`;

    }
    //arguments
    sayHello("daniel");
  
    function show(x,y) {
      console.log(x,y);
    }
    show(1);
    show(1,2,3);
//return values
    function multiply(a, b) {
      return a* b;
    }
    const result = multiply(2, 4);
    console.log(result);
     //default parameters
    function greet(name="guest"){
      return`welocome,${name}`;
    
    }
    console.log(greet());
    //rest parameters
    function sum(...numbers){
      return numbers.reduce((total,num) => total + num,0);
    }
    console.log(sum(1,2,3,4));
// the arguments object
    function logargs(){
      console.log(arguments);
    
    }
    logargs(1,2,3);


  return (
    <div>Exercise3</div>
  )
}

export default Exercise3
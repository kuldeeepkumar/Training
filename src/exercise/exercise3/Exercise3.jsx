import React from 'react'

const Exercise3 = () => {
//function declaration
    function greet(name){
        return'Hello,alice';
    }
    console.log(greet("alice"));//output:Hello,alice

    sayHello();//ouput:Hello

    function sayHello(){
      console.log("Hello");
    }

    const add = (a,b) => {
      return a+b;

    };
    console.log(add(3,4));
     const square = x => x*x;
     console.log(square(5));

     const person = {
      name:"mehak",
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
    <div>
      <h1>Exercise 3</h1>
    </div>
  )
}

export default Exercise3

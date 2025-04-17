import React from 'react'

const Exercise4 = () => {
  const fruits = ["Apple","Banana","Cherry"];
  console.log(fruits);

  
  

  //common array methods
  //push()-add to the end
 
   fruits.push("mango");
  console.log(fruits);
  //after push()
  
   console.log("after push()");



  //pop()-remove from the end

  fruits.pop();
  console.log(fruits);

  //after pop()
  console.log("after pop()");






  

  //shift()-remove from the beginning

  fruits.shift();
  console.log(fruits);

  //after shift
  console.log("after shift()");
  //unshift()-add to the beginning
  fruits.unshift();
  console.log(fruits);

  //after unshift
  console.log("after unshift()");
  //object 

  const person = {
      name:'john',
      age:30,
      isStudent:false
  };

  console.log(person.name);
  console.log(person['age']);

  person.age = 31;
  person.city = 'new york';
  console.log(person.age);
  console.log(person.city);

  //map()-transforms each item in the array

  const numbers = [1,2,3,4];

  const double = numbers.map(num => num*2);

  console.log(double);
  // after map
  console.log("after map()");

  //filter()
   
 const num = [1,2,3,4,5];
 const evens = num.filter(num => num% 2==0);
 console.log(evens);

 //reduce()
 const no =[1,2,3,4];
 const sum = no.reduce((acc,num)=> acc+num,0);
 console.log(sum);
 //
 
 const person2 = [
  {name:"john",age:30},
  {name:"jane",age:25},
  {name:"mike",age:35},
 ];
 console.log(person2)
 
  return (
    <div>Exercise4</div>
  )
}

export default Exercise4
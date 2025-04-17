import React from 'react'

const Exercise5 = () => {
    let a = null;
    console.log(a);
    console.log(typeof a);

    let car = null;
    console.log(car);
    console.log(typeof car);

    let bike;
    console.log(bike);

    function greet(){
        console.log("Hello!");
    
    }
    let result = greet();
    console.log(result);
 // NaN(NOT -A-NUMBER) 
 
 let x = 0/0;
 console.log(x);

 let y =  parseInt("hello");
 console.log(y);

 console.log(typeof NaN);
 console.log(NaN === NaN);

 //array Destructuring 

 
 const colors = ['red','green','blue'];

 const[first,second,third] = colors;

 console.log(first);
 console.log(second);
 console.log(third);




 //using rest...
 
 const fruits = ['apple','mango','cherry','date'];
 const[f1,...restfruits] = fruits;

 console.log(f1);
 console.log(restfruits);

 //object Destructuring 

 const person = {
  name:'alice',
  age:30,
  job:'developer'
 };

 const{name,age} = person;

 console.log(name);
 console.log(age);

 //renaming variables

 const{name:username,age:userage} = person;

 console.log(username);
 console.log(userage);

//nested Destructuring

const user = {
  id: 1,
  profile: {
    username:'john_doe',
    email:'john@example.com'
  }
};

const { profile:{email} } = user;
console.log(email);

//spread operator

const arr1 = [1,2,3];
const arr2 = [arr1,4,5];
console.log(arr2);

const obj1 = {a:1,b:2};
const obj2={obj1,c:3};
console.log(obj2);

const num = [10,20,30];

function sum(a,b,c) {
  return a+b+c;

}
console.log(sum(num));

//rest parameters

const no1 = [1,2,3];
const no2 = [no1,4,5];
console.log(no2);
//rest in desturcturing

const[seven,rest] = [10,20,30,40];
console.log(seven);
console.log(rest);




  


    
  return (
    <div>
      <h1>Exercise5</h1>
      </div>
  )
}

export default Exercise5
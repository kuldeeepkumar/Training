import React from 'react'
// import Exercise5 from './Exercise5';
import Variables from '../exercise1/Variables';

const Exercise5 = () => {
    //null
    let car= null;
    console.log(car);
    console.log(typeof car);
    //undefined
    let bike;
    console.log(bike);

    function greet(){
        console.log("Hello");
    }
    let result = greet();
    console.log(result);
    //NaN(Not-a-Number)
    let x=0/0;
    console.log(x);
    let y=parseInt("hello");
    console.log(y);
    console.log(typeof NaN);
    console.log(NaN === NaN);

  //  Destructuring (arrays,objects)explain this
  //ArrayDestructing
 
  const colors=['red','green','blue'];
  const[first,second,third]=colors;

  console.log(first);
  console.log(second);
  console.log(third);
  //Skipping values

  const numbers =[1,2,3,4,];
  const [a, ,c]=numbers;
  console.log(a);
  console.log(c);
  //Using rest...:

  const fruits =['apple','banana','cherry','date'];
  const[f1,...restfruits]=fruits;
  console.log(f1);
  console.log(restfruits);
  //Objects Destructuring

const person={
    name:'taniya',
    age:20,
    job:'developer'
};
const{name1,age}=person;
console.log(name1);
console.log(age);
//Renaming variables:
const{name:userName,age:userAge}=person;
console.log(userName);
console.log(userAge);

const{Name,city='unknown'}=person;
console.log(city);
//Nested Destructuring

const user={
    id:1,
    profile:{
        username:'john_doe',
        email:'john@example.com'
    }
};
const{profile:{username}}=user;
console.log(username);
const data =[1,[2,3]];
const [s,[b,V]]=data;
console.log(s);
console.log(b);
console.log(V);
//spread operator and rest parameter

//spread operator(...)
const arr1 = [1,2,3];
const arr2=[...arr1,4,5];
console.log(arr2);

const obj1={a:1,b:2};
const obj2={...obj1,c:3};
console.log(obj2);

const number=[10,20,30];
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...number));
//Rest parameter(...)
const arr3=[1,2,3];
const arr4=[...arr3,4,5];
console.log(arr4);
const[first1,...rest]=[10,20,30,40];
console.log(first1);
console.log(rest);


  return (
    <div>
      <h1>Exercise5</h1>
    </div>
  )
}

export default Exercise5

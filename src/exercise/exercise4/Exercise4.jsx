import React from 'react'
// import Exercise4 from './Exercise4';

const Exercise4 = () => {
  const fruits =['APPLE','Banan','Cherry'] ;
 //push() 
  fruits.push('mango'); 
  console.log(fruits);
  //pop()
  fruits.pop();
  console.log(fruits);
  //shift()
  fruits.shift();
  console.log(fruits);
  //unshift()
  fruits.unshift('orange');
  console.log(fruits);
   
//objects and properties
 const person ={
    name:'shivani',
    age:23,
    isStudent:false
 } ;
 console.log(person.name);
 console.log(person['age']);

 person.age =31;
 person.city ='new york';
 console.log(person.city);

 //array method

 //map()
 const numbers =[1,2,3];
 const doubled =numbers.map(num =>num*2);
 console.log(numbers);
 console.log(doubled);
 //filter
 const numbers1=[1,2,3,4,5];
 const evens =numbers1.filter(num=>num %2===0);
 console.log(evens);
 //reduce()
 const numbers2 =[1,2,3,4];
 const sum= numbers2.reduce((acc,num)=>acc+num,0);
 console.log(sum);
                                

  return (
    <div>
      <h1>Exercise4</h1>
    </div>
  )
}

export default Exercise4

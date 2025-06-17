import React from 'react'

const Exercise5 = () => {
// null
    let car = null;
    console.log(car);
    console.log(typeof car);
 // undefined
    let bike;
    console.log(bike);
      
    function greet(){
        console.log("hello");
    }
    let result = greet();
    console.log(result);
// NaN(not-a-number)
     let x =0/0;
     console.log(x);
    
     let y=parseInt ("hello");
     console.log(y);

     console.log(typeof NaN);
     console.log(NaN === NaN);

// Array Destructuring
     const color =['red','green','blue'];
     const [first,second,third] = color;

     console.log (first);
     console.log(second);
     console.log(third);

// skipping values
     const numbers = [1,2,3,4];
     const [a, , c] = numbers;
      
     console.log(a);
     console.log(c);

// using rest....
    const fruits =  ['apple','banana','cherry','date'];
    const[f1, ...restFruits] = fruits;
     
    console.log(f1);
    console.log(restFruits);

//object Destructuring
    const person ={
        name:'Alice',
        age: 30,
        job:'developer'
    };
    
    const {name,age} = person;
     
    console.log(name);
    console.log(age);

// renaming variables
    const { name2:userName, age2:userAge}= person;
    
    console.log(userName);
    console.log(userAge);
 
// renaming varibles using default value
   const{name3,city='Unknown'}=person;

   console.log(city);

//   nested destructuring with object
   const user4 ={
    id:1,
    profile:{
        username1:'john_doe',
        email:'john@example.com'
    }
   };
    
   const{ profile: {username1} }=user4;

   console.log(username1);

//  Nested destructuring with array  

   const date =[1,[2,3]];
    
   const[d,[e,f]]=date;
   console.log(d);
   console.log(e);
   console.log(f);


// spread operator in Array
    const arr1=[4,5,6];
    const arr2=[...arr1,7,8];
     
    console.log(arr2);

// spread operator in objects 
    const obj1={a:1,b:2};
    const obj2={...obj1,c:3};

    console.log(obj2);

// spreading in function calls
    const number=[10,20,30];
    
    function sum(x,y,z) {
        return x+y+z;
    }
     console.log(sum(...number));

// Rest parameter in functions
    const arr3 =[8,9,10];
    const arr4 =[...arr3,11,12];

    console.log(arr4);

// rest parameter in destructuring
   const [first1, ...rest] =[20,30,40,50];

   console.log(first1);
   console.log(rest);
     return (
    <div><h1>Exercises5</h1>
    </div>
  )
}
export default Exercise5
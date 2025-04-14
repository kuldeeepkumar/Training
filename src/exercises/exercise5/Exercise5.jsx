import React from 'react'


const Exercise5 = () => {
    let c=null;
    console.log(c);
    console.log(typeof c); //object
    const numbers =[1,2,3,4,5];

    const [a,b] = numbers; //1,3
    console.log(a);
    console.log(numbers);
    console.log([a, ,b]);

    const fruits=[""];
    const[f1, ...restfruits]= fruits;
    console.log("f1",f1);
    console.log(restfruits);


     //object destruction  

    const person ={
        name : "priya",
        age: 21,
        city: "dasuya",
    };
    const{name1,age}= person;
    console.log("name1",name);
    console.log(age);

    const{name : personName, age : personAge}  = person; 

    console.log("personName",personName);

    const data = [1,[2,3]];
    const[x,[y,z]] =data;//1,2,3
    console.log("a",x); // 1
    console.log("b",y); // 2
    console.log("c",z); // 3


  return (
    <div>
    <h1>Exercise5</h1>
       </div>
  )
}

export default Exercise5

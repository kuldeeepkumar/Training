import React from 'react'

const Exercise4 = () => {
    //predefine methods in array and objects
    const fruits =['Apple','Banana','Orange'];
    //push method in array
    fruits.push('Mango');
    console.log(fruits);
    //pop method in array
    fruits.pop();
    console.log(fruits);
    //shift method in an array
    fruits.shift();
    console.log(fruits);
    //unshift method in an array
    fruits.unshift('Orange');
    console.log(fruits);
    //an object is a collection of key-value pairs
    const person = {
      name: "john",
      age: 30,
      isstudents: false,
    };
    //accessing and updating in an object
    console.log(person.name);
    console.log(person["age"]);
    person.age=31;
    person.city="newyork";
    return <div>Exercise4</div>;
};

export default Exercise4

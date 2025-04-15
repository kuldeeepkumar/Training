import React from 'react'

const Exercise4 = () => {

    //Introduction to Arrays in Javascript

    console.log("Given Array");

    const fruits = ['Apple', 'Banana', 'Cherry'];
    console.log(fruits);

     //push()
     console.log("After push()");

     fruits.push('Mango');
     console.log(fruits);

    //pop()
    console.log("After pop()");

    fruits.pop();
    console.log(fruits);

    //shift()
    console.log("After shift()");

    fruits.shift();
    console.log(fruits);

    //unshift()
    console.log("After unshift()");

    fruits.unshift('orange');
    console.log(fruits);

    //Objects and Properties

    const person = {
        name: 'Jaspreet',
        age: 20,
        isStudent: false
    };
    console.log(person.name);
    console.log(person['age']);

    person.age = 21;
    person.city = 'New York';
    console.log(person.age);
    console.log(person.city);

    //Array Methods-map,filter,reduce

    //map()

    console.log("map()");
    const numbers = [1, 2, 3, 4];
    const square = numbers.map(num => num * 2);
    console.log(square);

    //filter()
    
    console.log("filter()");
    const array = [1, 2, 3, 4, 5];
    const evens = array.filter(num => num % 2 === 0);
    console.log(evens);

    //reduce()

    console.log("reduce()");
    const digits = [1, 2, 3, 4 , 5];
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    console.log(sum);



  return (
    <div>Exercise4</div>
  )
}

export default Exercise4
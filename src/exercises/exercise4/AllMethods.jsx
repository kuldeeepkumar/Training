import React from 'react'

const AllMethods = () => {
    //Array methods
    const numbers = [1,3,2,5,4];
   //sort
   numbers.sort();
    console.log(numbers);
    //Join
    const fruits = ["Apple", "Banana", "Cherry"];
    const fruitString = fruits.join(", ");
    console.log(fruitString);
    //Sortinf array of objects
    const people = [
        { name: "arsh", age: 19 },
        { name: "arsh", age: 21 },
        { name: "binni", age: 21 }
    ];
    people.sort((a, b) => a.age - b.age);
    console.log(people);
    //Sort by name
    people.sort((a,b)=>{
        const nameA=a.name.toUpperCase();
        const nameB=b.name.toUpperCase();
        if(nameA<nameB){
            return -1;
        }
        if(nameA>nameB){
            return 1;
        }
        return 0;
    });
    return (
    <div>
      <h1>AllMethods</h1>
    </div>
  )
}

export default AllMethods

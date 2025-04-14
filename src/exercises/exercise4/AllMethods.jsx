// import React from 'react'

// const AllMethods = () => {

    // const person = {
    //     name: "John",
    //     age: 30,
    //   };
    
    //   const person2 = [
    //     { name: "jass", age: 20 },
    //     { name: "sheetal", age: 20 },
    //     { name: "shikha", age: 20 },
    //   ];
    //   console.log(person2); // [{ name: "jass", age: 30 }, { name: "sheetal", age: 25 }, { name: "shikha", age: 35 }]
    
    //   const numbers = [1, 2, 3, 4, 5];
    
    //   const double = numbers.map((number) => number * 2);
    
    //   console.log(double); // [2, 4, 6, 8, 10]
    
    //   return (
    //     <div>
    //       <h1>Exercise4</h1>
    //       {person2.map((person, index) => (
    //         <div key={index}>
    //           <h2>{person.name}</h2>
    //           <p>{person.age}</p>
    //         </div>
    //       ))}
    //     </div>
    //   );
    // };
    import React from 'react'
    
    const AllMethods = () => {
        const months = ["March", "jan", "Feb", "Dec"];
        months.sort();
        console.log(months);
        const array1 = [1, 30, 4, 21, 100000];
        array1.sort();
        console.log(array1);
       
        //Array.from()
        console.log(Array.from("foo"));
        console.log(Array.from([1, 2, 3],(x) => x + x));

       //Array.isArray()
       console.log(Array.isArray([1, 3, 5]));
       console.log(Array.isArray("[]"));
       console.log(Array.isArray(new Array(5)));
       console.log(Array.isArray(new Int16Array([15, 33])));

       //Array.of()
       console.log(Array.of("foo", 2, "bar", true));
       console.log(Array.of());

       //Array.prototype.at()
       const array2 = [5, 12, 8, 130, 44];
       let index = 2;
       console.log(`An index of ${index} returns ${array2.at(index)}`);
       index = -2;
       console.log(`An index of ${index} returns ${array2.at(index)}`);

       //Array.prototype.concat()
       const array3 = ["a", "b","c"];
       const array4 = ["d", "e","f"];
       const array5 = array3.concat(array4);
       console.log(array5);

      return (
        <div>AllMethods</div>
      )
    }
    


export default AllMethods


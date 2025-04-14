// import React from "react";

// const AllMethods = () => {

//   const person = {
//     name: "John",
//     age: 30,
//   };

//   const person2 = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Mike", age: 35 },
//   ];
//   console.log(person2); // [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Mike", age: 35 }]

//   return (
//     <div>
//       <h1>AllMethods</h1>
//       {person2.map((person, index) => (
//         <div key={index}>
//           <h2>{person.name}</h2>
//           <p>{person.age}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllMethods;

import React from "react";

const AllMethods = () => {
  const months = ["march", "jan", "Feb", "Dec"];
  months.sort();
  console.log(months);

  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);

  // Array.from()

  console.log(Array.from("foo"));
  console.log(Array.from([1, 2, 3], (x) => x + x));

  // Array.isArray()

  console.log(Array.isArray([1, 3, 5]));

  console.log(Array.isArray("[]"));

  console.log(Array.isArray(new Array(5)));

  console.log(Array.isArray(new Int16Array([15, 33])));

  // Array.of
  console.log("Array.of()");
  console.log(Array.of("foo", 2, "bar, true"));

  console.log(Array.of());

  //Array.prototype.at()

  console.log("Array.prototype.at()");

  const array = [5, 12, 8, 130, 44];
  let index = 2;

  console.log(`an index of ${index} returns ${array.at(index)}`);

  index = -2;
  console.log(`an index of ${index} returns ${array.at(index)}`);

  //Array.prototype.concat()

  console.log("Array.prototype.concat()");

  const array2 = ["a", "b", "c"];
  const array3 = ["d", "e", "f"];
  const array4 = array2.concat(array3);

  console.log(array4);

  // Array.prototype.copyWithin();

  console.log("Array.prototype.copyWithin()");

  const array5 = ["a", "b", "c", "d", "e"];
  console.log(array5.copyWithin(0, 3, 4));

  console.log(array5.copyWithin(1, 3));

  //

  return <div>AllMethods</div>;
};

export default AllMethods;

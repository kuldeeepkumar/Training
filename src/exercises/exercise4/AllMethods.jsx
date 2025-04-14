import React from "react";

const AllMethods = () => {
  // use array sort()
  const months = ["march", "jan", "feb", "dec"];
  months.sort();
  console.log(months);
  const array1 = [1, 30, 4, 21, 10000];
  array1.sort();
  console.log(array1);
  //use array.from()

  const Array1 = [1, 2];

  console.log(Array1.from("foo"));
  console.log(Array1.from([1, 2, 3], (x) => x + x));

  //array.isArray()
  console.log(Array.isArray([1, 3, 5]));
  console.log(Array.isArray("[]"));
  console.log(Array.isArray(new Array(5)));
  console.log(Array.isArray(new Int16Array([15, 33])));
  //array.of()

  console.log(Array.of("foo", 2, "bar", true));
  console.log(Array.of());

  return <div>AllMethods</div>;
};

export default AllMethods;

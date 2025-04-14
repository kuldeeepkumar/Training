import React from "react";
//sort()
const AllMethods = () => {
  const months = ["March", "Jan", "Feb"];
  months.sort();
  console.log(months);
  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);

  //Array.from()
  console.log(Array.from("foo"));
  console.log(Array.from([1, 2, 3], (x) => x + x));

  return <div>AllMethods</div>;
};

export default AllMethods;

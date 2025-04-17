import React from 'react'

const AllMethod = () => {
    const months = ["March", "jan", "Feb", "Dec"];
    months.sort();
    console.log(months);
    const array1 = [1, 30, 4, 21, 100000];
    array1.sort();
    console.log(array1);

    //Array.from()
    console.log(Array.from("foo"));
    console.log(Array.from([1, 2, 3], (x) => x + x));

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
    const array3 = ["a", "b", "c"];
    const array4 = ["d", "e", "f"];
    const array5 = array3.concat(array4);
    console.log(array5);
  return (
    <div>
      Exercise6
    </div>
  )
}

export default AllMethod;

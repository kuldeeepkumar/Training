import React from "react";

const Encapsulation = () => {
  const counter = (function () {
    let count = 0;
    return {
      increment: function () {
        count++;
        console.log(count);
      },
      decrement: function () {
        count--;
        console.log(count);
      },
      getCount: function () {
        return count;
      },
    };
  })();
  counter.increment();
  counter.increment();
  counter.decrement();
  console.log(counter.getCount());

  return <div>Encapsulation</div>;
};

export default Encapsulation;

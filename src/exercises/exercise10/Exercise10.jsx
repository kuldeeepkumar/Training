import multiply, { add, subtract } from "./mathUtils";

import DefaultParameters from "./DefaultParameters";
import React from "react";
import TemplateLeterals from "./TemplateLeterals";
import   DestructuringExamples  from "./DestructuringExamples.jsx"; 

const Exercise10 = () => {
  console.log("Add:", add(5, 3));
  console.log("Subtract:", subtract(5, 3));
  console.log("Multiply:", multiply(5, 3));
  return (
    <>
      <TemplateLeterals />
      <DefaultParameters />
      <DestructuringExamples />
    </>
  );
};

export default Exercise10;
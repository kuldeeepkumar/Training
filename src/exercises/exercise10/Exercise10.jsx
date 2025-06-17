import multiply, { add, subtract } from "./mathUtils";

import React from "react";

import DefaultParameters from "./DefaultParameters";
import TemplateLiterals from "./TemplateLiterals";
import DestructuringExamples from "./DestructuringExamples";

const Exercise10 = () => {
  console.log("Add:", add(5, 3));
  console.log("Subtract:", subtract(5, 3));
  console.log("Multiply:", multiply(5, 3));
  return (
    <>
      <TemplateLiterals />
      <DefaultParameters />
      <DestructuringExamples />
    </>
  );
};

export default Exercise10;

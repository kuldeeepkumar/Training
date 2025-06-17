import multiply, { add, subtract } from "./mathUtils";

import React from "react";
import DefaultParameters from "./DefaultParameters";
import DestructuringExamples from "./DestructuringExamples";
import TemplateLiterals from "./TemplateLiterals";

const Exercise10 = () => {
  console.log("Add:", add(5, 3));
  console.log("Subtract:", subtract(5, 3));
  console.log("Multiply:", multiply(5, 3));
  return (
    <>
      <DefaultParameters />
      <DestructuringExamples />
      <TemplateLiterals />
    </>
  );
};

export default Exercise10;

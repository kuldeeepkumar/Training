 import multiply, { add, subtract } from "./mathUtils";

import DefaultParameters from "./DefaultParameters";
import DestructuringExamples from "./DestructuringExamples";
import React from "react";
import TemplateLeterals from "./TemplateLiterals";

const Exercise10 = () => {
  console.log("Add:", add(5, 3));
  console.log("Subtract:", subtract(5, 3));
  console.log("Multiply:", multiply(5, 3));
  return (
    <>
      <TemplateLeterals />
      <DefaultParameters />Add commentMore actions
      <DestructuringExamples />
    </>
  );
};

export default Exercise10;
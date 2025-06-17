import React from "react";
import DefaultParameters from "./DefaultParameters";
import multiply, { add, subtract } from "./mathUtils";
import DestructuringExamples from "./DestructuringExamples";
import TemplateLeterals from "./TemplateLeterals";

const Exercise10 = () => {
  console.log("Add:", add(5, 3));
  console.log("Subtract:", subtract(5, 3));
  console.log("Multiply:", multiply(5, 3));
  return (
    <>
      <DefaultParameters />
      <DestructuringExamples />
      <TemplateLeterals />
    </>
  );
};

export default Exercise10;

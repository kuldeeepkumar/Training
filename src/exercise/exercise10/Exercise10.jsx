import multiply, { add, subtract } from "./mathUtils";

import DefaultParameters from "./DefaultParamrters.jsx";
import DestructuringExamples from "./DestructuringExamples";
import React from "react";
import TemplateLeterals from "./TemplatelLiterals";

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

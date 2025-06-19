import multiply, { add, subtract } from "./mathUtils";

import React from 'react'
import DefaultParameters from './DefaultParameters';
import TemplateLiterals from './TemplateLiterals';
import DestructingExamples from './DestructingExamples';


const Exercise10 = () => {

  console.log("Add:", add(4, 5));
  console.log("Subtract:", subtract(5, 3));
  console.log("Multiply:", multiply(5, 3));
  


  return (
   <>
   <DefaultParameters/>
   <DestructingExamples/>
   <TemplateLiterals/>
   </>
  )
}

export default Exercise10

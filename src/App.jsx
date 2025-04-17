import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exercise1 from './exercises/exercise1/Exercise1'
import Exercise2 from './exercises/exercise2/Exercise2'
import Questios from './exercises/exercise2/Questios'
import Exercise3 from './exercises/exercise3/Exercise3'
import Exercise4 from './exercises/exercise4/Exercise4'
import Allmethods from './exercises/exercise4/Allmethods'
import Exercise5 from './exercises/exercise5/Exercise5'
import Execise6 from './exercises/exercise6/Execise6'






function App() {
console.log("hello")  

  return (
    <>
   {/* <Exercise1/>  */}
  {/* <Exercise2/> */}
 <Exercise3/> 
 
 

  {/* <Questios/> */}
  <Exercise4/>
  <Allmethods/>
  <Exercise5/>
  <Execise6/>
  
    </>
  )
}

export default App

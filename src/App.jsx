import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let color = prompt("Enter color name :");
  document.body.style.background = color;
  console.log("Hello World");

  return (
    <>
    
     <div>
      <ul>
      <u>
      <h1><li>Hello World</li></h1>
      </u>
      
    
      <h1>I'm Muskaan</h1>
  
      </ul>

     </div>
    </>
  )
}

export default App

import React , {useState} from 'react'
import "tailwindcss";
import '../App.css'
const Buttons = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

  return (
    <div>
      <div className='container'>
     <button onClick={increment} className='inc'>Increment</button>
     <button onClick={decrement} className='dec'>Decrement</button>
     <button onClick={reset} className='res'>Reset</button>
     </div>
     <h1>Count: {count}</h1>
     <p >Click the buttons to change the count.</p> 
    </div>
  )
}

export default Buttons

import React , {useState} from 'react'
import '../App.css'
const buttons = () => {
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
      <div Class='container'>
     <button onClick={increment} Class='inc'>Increment</button>
     <button onClick={decrement} Class='dec'>Decrement</button>
     <button onClick={reset} Class='res'>Reset</button>
     </div>
     <h1>Count: {count}</h1>
     <p>Click the buttons to change the count.</p> 
    </div>
  )
}

export default buttons

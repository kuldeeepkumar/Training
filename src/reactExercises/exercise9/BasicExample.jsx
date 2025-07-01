import React, { useReducer } from "react";

// Initial state object
const initialState = { count: 0 };

// Reducer function to update state based on action type
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

// Main Basic Example Counter component
function BasicExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ marginLeft: "10px" }}>
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default BasicExample;

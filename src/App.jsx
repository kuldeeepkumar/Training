import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exercise1 from "./exercises/exercise1/Exercise1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Exercise1 />
    </>
  );
}

export default App;

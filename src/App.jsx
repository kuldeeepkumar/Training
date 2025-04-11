import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exercise1 from "./exercises/exercise1/Exercise1";
import Exercise2 from "./exercises/exercise2/Exercise2";
import Exercise3 from "./exercises/exercise3/Exercise3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Exercise1 />
      <Exercise2/>
      <Exercise3/>
    </>
  );
}

export default App;

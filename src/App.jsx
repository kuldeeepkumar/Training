import "./App.css";

import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

import Exercise1 from "./exercises/exercises1/Exercises1";
import Exercise2 from "./exercises/exercises2/Exercises2";
import Exercise3 from "./exercises/exercises3/Exercises3";
import Exercise4 from "./exercises/exercises4/Exercises4";
import Exercise5 from "./exercises/exercises5/Exercises5";
import Exercise6 from "./exercises/exercises6/Exercises6";
import Exercise7 from "./exercises/exercises7/Exercises7";
import Exercise8 from "./exercises/exercises8/Exercises8";
import Exercise9 from "./exercises/exercises9/Exercises9";
import Exercise10 from "./exercises/exercises10/Exercises10";
import Exercise11 from "./exercises/exercises11/Exercises11";
import Exercise12 from "./exercises/exercises12/Exercises12";
import Exercise13 from "./exercises/exercises13/Exercises13";
import TodoApp from "./exercises/experiments/TodoApp";
import ReactExercise1 from "./reactExercises/exercise1/ReactExercise1";
import ReactExercise2 from "./reactExercises/exercise2/ReactExercise2";
import ReactExercise3 from "./reactExercises/exercise3/ReactExercise3";
import ReactExercise4 from "./reactExercises/exercise4/ReactExercise4";
import ReactExercise5 from "./reactExercises/exercise5/ReactExercise5";
import ReactExercise6 from "./reactExercises/exercise6/ReactExercise6";

import ReactExercise8 from "./reactExercises/exercise8/ReactExercise8";
import Exercises7 from "./exercises/exercises7/Exercises7";
import ReactExercise7 from "./reactExercises/exercise7/ReactExercise7";
import HomePage from "./HomePage";
function App() {
  const javaScriptExercisesData = [
    {
      routesName: "/",
      component: <HomePage />,
    },
    {
      routesName: "Exercise1",
      component: <Exercise1 />,
    },
    {
      routesName: "Exercise2",
      component: <Exercise2 />,
    },
    {
      routesName: "Exercise3",
      component: <Exercise3 />,
    },
    {
      routesName: "Exercise4",
      component: <Exercise4 />,
    },
    {
      routesName: "Exercise5",
      component: <Exercise5 />,
    },
    {
      routesName: "Exercise6",
      component: <Exercise6 />,
    },
    {
      routesName: "Exercise7",
      component: <Exercises7 />,
    },
    {
      routesName: "Exercise8",
      component: <Exercise8 />,
    },
    {
      routesName: "Exercise9",
      component: <Exercise9 />,
    },
    {
      routesName: "Exercise10",
      component: <Exercise10 />,
    },
    {
      routesName: "Exercise11",
      component: <Exercise11 />,
    },
    {
      routesName: "Exercise12",
      component: <Exercise12 />,
    },
    {
      routesName: "Exercise13",
      component: <Exercise13 />,
    },
  ];

  const reactExercisesData = [
    {
      routesName: "ReactExercise1",
      component: <ReactExercise1 />,
    },
    {
      routesName: "ReactExercise2",
      component: <ReactExercise2 />,
    },
    {
      routesName: "ReactExercise3",
      component: <ReactExercise3 />,
    },
    {
      routesName: "ReactExercise4",
      component: <ReactExercise4 />,
    },
    {
      routesName: "ReactExercise5",
      component: <ReactExercise5 />,
    },
    {
      routesName: "ReactExercise6",
      component: <ReactExercise6 />,
    },
    {
      routesName: "ReactExercise7",
      component: <ReactExercise7 />,
    },
    {
      routesName: "ReactExercise8",
      component: <ReactExercise8 />,
    },
  ];
  return (
    <>
      <Routes>
        {javaScriptExercisesData.map((route) => (
          <Route
            key={route.routesName}
            path={`/${route.routesName}`}
            element={route.component}
          />
        ))}
        {reactExercisesData.map((route) => (
          <Route
            key={route.routesName}
            path={`/${route.routesName}`}
            element={route.component}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;

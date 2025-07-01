import "./App.css";

import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

import Exercise1 from "./exercises/exercise1/Exercise1";
import Exercise10 from "./exercises/exercise10/Exercise10";
import Exercise11 from "./exercises/exercise11/Exercise11";
import Exercise12 from "./exercises/exercise12/Exercise12";
import Exercise13 from "./exercises/exercise13/Exercise13";
import Exercise2 from "./exercises/exercise2/Exercise2";
import Exercise3 from "./exercises/exercise3/Exercise3";
import Exercise4 from "./exercises/exercise4/Exercise4";
import Exercise5 from "./exercises/exercise5/Exercise5";
import Exercise6 from "./exercises/exercise6/Exercise6";
import Exercise7 from "./exercises/exercise7/Exercise7";
import Exercise8 from "./exercises/exercise8/Exercise8";
import Exercise9 from "./exercises/exercise9/Exercise9";
import HomePage from "./HomePage";
import React from "react";
import ReactExercise1 from "./reactExersices/exercise1/ReactExercise1";
import ReactExercise2 from "./reactExersices/exercise2/ReactExercise2";
import ReactExercise3 from "./reactExersices/exercise3/ReactExercise3";
import ReactExercise4 from "./reactExersices/exercise4/Exercise4";

import ReactExercise5 from "./reactExersices/exersice5/ReactExercise5";
import ReactExercise7 from "./reactExersices/Exersice7/ReactExercise7";
import ReactExercise8 from "./reactExersices/Exersice8/ReactExercise8";
import ReactExercise9 from "./reactExersices/exercise9/ReactExercise9";
import ReactExercise6 from "./reactExersices/exersice6/ReactExercise6";
import TailwindExercise1 from "./TailwindCss/TailwindExercise1";
import TodoApp from './experiments/experiment TodoApp';

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
      component: <Exercise7 />,
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
    {
      routesName: "TodoApp",
      component: <TodoApp />,
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
    {
      routesName: "ReactExercise9",
      component: <ReactExercise9 />,
    },
  ];

  const tailwindExercisesData = [
    { routesName: "TailwindExercise1", component: <TailwindExercise1 /> },
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
        {tailwindExercisesData.map((route) => (
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

import "./App.css";

import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

import Exercise1 from "./exercises/exercise1/Exercise1";
import Exercise10 from "./exercises/exercise10/Exercise10";
import Exercise11 from "./exercises/exercise11/Exercise11";
import Exercise6 from "./exercises/exercise6/Exercise6";
import Exercise7 from "./exercises/exercise7/Exercise7";
import Exercise8 from "./exercises/exercise8/Exercise8";
import Exercise9 from "./exercises/exercise9/Exercise9";
import HomePage from "./HomePage";
import React from "react";

import ReactExercise2 from "./ReactExercises/exercise2/ReactExercise2";
import ReactExercise8 from "./ReactExercises/exercise8/ReactExercise8";
import ReactExercise4 from "./ReactExercises/exercise4/ReactExercise4";
import Exercise3 from "./exercises/exercise3/Exercise3";
import Exercise4 from "./exercises/exercise4/Exercise4";
import Exercise5 from "./exercises/exercise5/Exercise5";
import Exercise2 from "./exercises/exercise2/Exercise2";
import Exercise12 from "./exercises/exercise12/Exercise12";
import Exercise13 from "./exercises/exercise13/Exercise13";
import ReactExercise3 from "./ReactExercises/exercise3/ReactExercise3";
import ReactExercise5 from "./ReactExercises/exercise5/ReactExercise5";
import ReactExercise6 from "./ReactExercises/exercise6/ReactExercise6";
import ReactExercise7 from "./ReactExercises/exercise7/ReactExercise7";
import ReactExercise1 from "./ReactExercises/exercise1/ReactExercise1";
import TodoApp from "./exercises/experiment /TodoApp";

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

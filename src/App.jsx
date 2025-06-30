import Exercise1 from "./exercises/exercises1/Exercises1";
import Exercise10 from "./exercises/exercises10/Exercises10";
import Exercise11 from "./exercises/exercises11/Exercises11";
import Exercise12 from "./exercises/exercises12/Exercises12";
import Exercise13 from "./exercises/exercises13/Exercises13";
import Exercise2 from "./exercises/exercises2/Exercises2";
import Exercise3 from "./exercises/exercises3/Exercises3";
import Exercise4 from "./exercises/exercises4/Exercises4";
import Exercise5 from "./exercises/exercises5/Exercises5";
import Exercise6 from "./exercises/exercises6/Exercises6";
import Exercise7 from "./exercises/exercises7/Exercises7";
import Exercise8 from "./exercises/exercises8/Exercises8";
import Exercise9 from "./exercises/exercises9/Exercises9";
import HomePage from "./HomePage";
import React from "react";
import ReactExercise1 from "./reactExercises/exercise1/ReactExercise1";
import ReactExercise2 from "./reactExercises/exercise2/ReactExercise2";
import ReactExercise3 from "./reactExercises/exercise3/ReactExercise3";
import ReactExercise4 from "./reactExercises/exercise4/ReactExercise4";
import ReactExercise5 from "./reactExercises/exercise5/ReactExercise5";
import ReactExercise6 from "./reactExercises/exercise6/ReactExercise6";
import ReactExercise7 from "./reactExercises/exercise7/ReactExercise7";
import ReactExercise8 from "./reactExercises/exercise8/ReactExercise8";
import ReactExercise9 from "./reactExercises/exercise9/ReactExercise9";
import TodoApp from "./exercises/experiments/TodoApp";
import Exercises1 from "./exercises/exercises1/Exercises1";
import Exercises2 from "./exercises/exercises2/Exercises2";
import Exercises3 from "./exercises/exercises3/Exercises3";
import Exercises4 from "./exercises/exercises4/Exercises4";
import Exercises5 from "./exercises/exercises5/Exercises5";
import Exercises6 from "./exercises/exercises6/Exercises6";
import Exercises7 from "./exercises/exercises7/Exercises7";
import Exercises8 from "./exercises/exercises8/Exercises8";
import Exercises9 from "./exercises/exercises9/Exercises9";
import Exercises10 from "./exercises/exercises10/Exercises10";
import Exercises11 from "./exercises/exercises11/Exercises11";
import Exercises12 from "./exercises/exercises12/Exercises12";
import Exercises13 from "./exercises/exercises13/Exercises13";
import { Route, Routes } from "react-router-dom";
import TailwindExercise1 from "./tailwindCss/exercise1/TailwindExercise1";

function App() {
  const javaScriptExercisesData = [
    {
      routesName: "/",
      component: <HomePage />,
    },
    {
      routesName: "Exercises1",
      component: <Exercises1 />,
    },
    {
      routesName: "Exercises2",
      component: <Exercises2 />,
    },
    {
      routesName: "Exercises3",
      component: <Exercises3 />,
    },
    {
      routesName: "Exercises4",
      component: <Exercises4 />,
    },
    {
      routesName: "Exercises5",
      component: <Exercises5 />,
    },
    {
      routesName: "Exercises6",
      component: <Exercises6 />,
    },
    {
      routesName: "Exercises7",
      component: <Exercises7 />,
    },
    {
      routesName: "Exercises8",
      component: <Exercises8 />,
    },
    {
      routesName: "Exercises9",
      component: <Exercises9 />,
    },
    {
      routesName: "Exercises10",
      component: <Exercises10 />,
    },
    {
      routesName: "Exercises11",
      component: <Exercises11 />,
    },
    {
      routesName: "Exercises12",
      component: <Exercises12 />,
    },
    {
      routesName: "Exercises13",
      component: <Exercises13 />,
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

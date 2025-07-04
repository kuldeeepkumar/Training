import "./App.css";
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
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigate();
  const javaScriptExecisesData = [
    {
      routesName: "Exercise1",
    },
    {
      routesName: "Exercise2",
    },
    {
      routesName: "Exercise3",
    },
    {
      routesName: "Exercise4",
    },
    {
      routesName: "Exercise5",
    },
    {
      routesName: "Exercise6",
    },
    {
      routesName: "Exercise7",
    },
    {
      routesName: "Exercise8",
    },
    {
      routesName: "Exercise9",
    },
    {
      routesName: "Exercise10",
    },
    {
      routesName: "Exercise11",
    },
    {
      routesName: "Exercise12",
    },
    {
      routesName: "Exercise13",
    },
  ];
  const reactExecisesData = [
    {
      routesName: "ReactExercise1",
    },
    {
      routesName: "ReactExercise2",
    },
    {
      routesName: "ReactExercise3",
    },
    {
      routesName: "ReactExercise4",
    },
    {
      routesName: "ReactExercise5",
    },
    {
      routesName: "ReactExercise6",
    },
    {
      routesName: "ReactExercise7",
    },
    {
      routesName: "ReactExercise8",
    },
    {
      routesName: "ReactExercise9",
    },
  ];
  const tailwindExecisesData = [
    { routesName: "TailwindExercise1" },
    { routesName: "TailwindExercise2" },
  ];
  return (
    <>
      <div>
        <h2> Java Script Exercises</h2>
        <nav className="mainContainer">
          {javaScriptExecisesData.map((route, index) => (
            <button
              key={route.routesName}
              onClick={() => navigation(`/${route.routesName}`)}
              className={index % 2 === 0 ? "cardButtonUp" : "cardButtonDown"}
            >
              {route.routesName}
            </button>
          ))}
        </nav>
      </div>
      <div>
        <h2> React Exercises</h2>
        <nav className="mainContainer">
          {reactExecisesData.map((route, index) => (
            <button
              key={route.routesName}
              onClick={() => navigation(`/${route.routesName}`)}
              className={index % 2 === 0 ? "cardButtonUp" : "cardButtonDown"}
            >
              {route.routesName}
            </button>
          ))}
        </nav>
      </div>
      <h2> Tailwind Exercises</h2>
      <nav className="mainContainer">
        {tailwindExecisesData.map((route, index) => (
          <button
            key={route.routesName}
            onClick={() => navigation(`/${route.routesName}`)}
            className={index % 2 === 0 ? "cardButtonUp" : "cardButtonDown"}
          >
            {route.routesName}
          </button>
        ))}
      </nav>
    </>
  );
};

export default HomePage;

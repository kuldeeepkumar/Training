import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigate();
  const javaScriptExecisesData = [
    {
      routesName: "Exercisess1",
    },
    {
      routesName: "Exercises2",
    },
    {
      routesName: "Exercises3",
    },
    {
      routesName: "Exercises4",
    },
    {
      routesName: "Exercises5",
    },
    {
      routesName: "Exercises6",
    },
    {
      routesName: "Exercises7",
    },
    {
      routesName: "Exercises8",
    },
    {
      routesName: "Exercises9",
    },
    {
      routesName: "Exercises10",
    },
    {
      routesName: "Exercises11",
    },
    {
      routesName: "Exercises12",
    },
    {
      routesName: "Exercises13",
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
      {/* This Section code is repesenting java script Exercises */}
      <div>
        <h2> Java Script Exercises</h2>
        <nav className="mainContainer">
          {javaScriptExecisesData.map((route) => (
            <button
              key={route.routesName}
              onClick={() => navigation(`/${route.routesName}`)}
              className="cardButton"
            >
              {route.routesName}
            </button>
          ))}
        </nav>
      </div>
      {/* This Section code is repesenting React Exercises */}
      <div>
        <h2> React Exercises</h2>
        <nav className="mainContainer">
          {reactExecisesData.map((route) => (
            <button
              key={route.routesName}
              onClick={() => navigation(`/${route.routesName}`)}
              className="cardButton"
            >
              {route.routesName}
            </button>
          ))}
        </nav>
      </div>
      {/* This Section code is repesenting Tailwind CSS Exercises */}
      <div>
        <h2> Tailwind CSS Exercises</h2>
        <nav className="mainContainer">
          {tailwindExecisesData.map((route) => (
            <button
              key={route.routesName}
              onClick={() => navigation(`/${route.routesName}`)}
              className="cardButton"
            >
              {route.routesName}
            </button>
          ))}
        </nav>
        s
      </div>
    </>
  );
};

export default HomePage;

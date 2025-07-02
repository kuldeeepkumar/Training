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
    {
      routesName: "TodoApp",
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
    {
      routesName: "TailwindExercise1",
    },
    {
      routesName: "TailwindExercise2",
    },
  ];
  return (
    <>
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
      </div>
    </>
  );
};

export default HomePage;

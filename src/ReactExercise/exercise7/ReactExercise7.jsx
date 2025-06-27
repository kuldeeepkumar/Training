import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";

function ReactExercise7() {
  return (
    // Wrap your ReactExercise7 inside ThemeProvider to give access to context
    <ThemeProvider>
      <div>
        <Header />
        <p style={{ padding: "20px" }}>
          This is a sample ReactExercise7 demonstrating Context API in React.
        </p>
      </div>
    </ThemeProvider>
  );
}
export default ReactExercise7;
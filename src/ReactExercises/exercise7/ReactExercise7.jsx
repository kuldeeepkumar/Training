// This is the root component that wraps all children inside ThemeProviderAdd commentMore actionsAdd commentMore actions

import Header from "./Header";
import React from "react";
import { ThemeProvider } from "./TemeContext";

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
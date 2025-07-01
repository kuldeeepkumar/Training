// This file creates the context and a provider to share theme valueAdd commentMore actionsAdd commentMore actions

import React, { createContext, useState } from "react";

// Step 1: Create the context
export const ThemeContext = createContext();

// Step 2: Create the provider component
export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [name, setName] = useState("here");

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    // Step 3: Provide the context value to children
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, name, setName }}>
      {children}
    </ThemeContext.Provider>
  );
}
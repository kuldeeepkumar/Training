// This component consumes the theme context without receiving propsAdd commentMore actionsAdd commentMore actions

import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

function Header() {
  // Access context using useContext
  const { isDarkTheme, toggleTheme, name } = useContext(ThemeContext);
  console.log("isDarkTheme:", isDarkTheme);

  return (
    <header
      style={{
        backgroundColor: isDarkTheme ? "#333" : "#f5f5f5",
        color: isDarkTheme ? "#fff" : "#000",
        padding: "10px",
        textAlign: "center",
      }}>
      <h2>{isDarkTheme ? "Dark Mode" : "Light Mode"} Header</h2>
      <button onClick={toggleTheme}>Toggle Theme {name}</button>
    </header>
  );
}

export default Header;
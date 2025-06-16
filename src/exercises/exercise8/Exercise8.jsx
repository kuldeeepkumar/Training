import React, { useEffect, useState } from "react";
const Exercise8 = () => {
  const [title, setTitle] = useState("Welcome to DOM");
  const [messageStyle, setMessageStyle] = useState({});
  const [resultText, setResultText] = useState("");
  const [resultStyle, setResultStyle] = useState({});

  useEffect(() => {
    // Simulating DOM manipulation on load
    setTitle("DOM Manipulated!");
    setMessageStyle({
      color: "blue",
      fontWeight: "bold",
      
    });
  }, []);

  const handleClick = () => {
    setResultText("Button was clicked!");
    setResultStyle({ color: "purple" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Castellar" }}>
      <h1>{title}</h1>
      <p style={messageStyle}>This is a paragraph.</p>
      <button onClick={handleClick}>Click Me</button>
      <p style={resultStyle}>{resultText}</p>
    </div>
  );
};

export default Exercise8;
import React, { useEffect, useState } from "react";

export const Exercise8 = () => {
  const Exercise8 = () => {
    const [title, setTitle] = useState("Welcome to  Home");
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
      setResultStyle({ color: "green" });
      setTitle("I am here");
    };

    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>{title}</h1>
        <p style={messageStyle}>This is a paragraph.</p>
        <button onClick={handleClick}>Click Me</button>
        <p style={resultStyle}>{resultText}</p>
      </div>
    );
  };
  return <div>Exercise8</div>;
};
export default Exercise8;

import React, { useState } from "react";

const ConditionalRendering = () => {
  const pswrd = "123"; // Example password for validation
  const [isVisible, setIsVisible] = useState(true);
  const [password, setPassword] = useState();

  // Toggles the visibility of the message
  const toggleMessage = () => {
    setIsVisible((prev) => !prev);
  };

  console.log("invisible", isVisible);

  console.log("password", password);
  return (
    <div>
      <h2>Conditional Rendering Example</h2>

      {/* Toggle button to show/hide message */}
      <button onClick={toggleMessage}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      <br />
      <br />
      <br />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <br />

      {password === undefined || password === "" ? (
        <>Enter Password</>
      ) : password === pswrd ? (
        <p style={{ color: "green" }}>Password is correct</p>
      ) : (
        <p style={{ color: "red" }}>This is wrong password</p>
      )}

      {/* Message appears only if isVisible is true */}
      {isVisible && (
        <p>This message is conditionally rendered based on button click.</p>
      )}
    </div>
  );
};
export default ConditionalRendering;
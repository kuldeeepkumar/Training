import React, { useState } from "react";

const ConditionalRendering = () => {
  const pswrd = "123"; // Example password for validation
  const [isVisible, setIsVisible] = useState(true);
  const [password, setPassword] = useState();
  const [showEye, setShowEye] = useState(false);

  // Toggles the visibility of the message
  const toggleMessage = () => {
    setIsVisible((prev) => !prev);
  };

  console.log("invisible", isVisible);

  console.log("password", password);
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
      <h2>Conditional Rendering Example</h2>

      {/* Toggle button to show/hide message */}
      <button onClick={toggleMessage}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {/* Message appears only if isVisible is true */}
      {isVisible && (
        <p>This message is conditionally rendered based on button click.</p>
      )}
      <br />
      <br />
      <br />

      {/* Custom Inpur Box with Show hide password eye icon functionality  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <input
          type={showEye ? "password" : "text"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {showEye ? (
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://media.istockphoto.com/id/845329690/vector/eye-icon-vector-illustration.webp?s=1024x1024&w=is&k=20&c=bJqcOQARi5poHcmEzADKgZUW_GBRleOUEKKipPZORxM="
            alt="img"
            onClick={() => setShowEye(false)}
          />
        ) : (
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://media.istockphoto.com/id/1201562837/vector/hidden-icon.jpg?s=1024x1024&w=is&k=20&c=1UKzJ6q0GsIOxhwrx_37yU12o9kzRUt5BrTrx3o9Ils="
            alt="img"
            onClick={() => setShowEye(true)}
          />
        )}
      </div>

      <br />

      <br />

      {password === undefined || password === "" ? (
        <>Enter Password</>
      ) : password === pswrd ? (
        <p style={{ color: "green" }}>Password is correct</p>
      ) : (
        <p style={{ color: "red" }}>This is wrong password</p>
      )}
    </div>
  );
};

export default ConditionalRendering;
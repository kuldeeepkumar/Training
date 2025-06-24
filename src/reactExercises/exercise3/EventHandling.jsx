import React, { useState } from "react";

const EventHandling = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // Handles button click event
  const handleClick = () => {
    alert("Button was clicked!");
  };

  // Handles input change event
  const handleChange = (event) => {
    setInputValue(event.target.value); // Update the state as user types
  };

  // Handles form submit event
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    setSubmittedName(inputValue); // Store submitted name
    alert(`Form submitted with name: ${inputValue}`);
  };

  return (
    <div>
      <h2>Event Handling Example</h2>

      {/* Button click event */}
      <button onClick={handleClick}>Click Me</button>

      <hr />

      {/* Input change and form submit */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedName && <p>Submitted Name: {submittedName}</p>}
    </div>
  );
};

export default EventHandling;

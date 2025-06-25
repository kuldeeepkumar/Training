import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // updating state on each change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted Name: " + name);
  };

  return (
    <div>
      <h2>Controlled Component Example</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name} // controlled by React
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledComponent;



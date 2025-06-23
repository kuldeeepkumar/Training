import React, { useState } from "react";

const Example2 = () => {
  // ----------- Example 2: Text Input Component -----------Add commentMore actions

  // Declare a state variable 'text' and initialize it to an empty string

  const [text, setText] = useState("");

  // Function to handle input change
  const handleChange = (e) => {
    // Update the text state with new value from the input field
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Text Input Example</h2>

      {/* Input field controlled by the text state */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something here"
      />

      <p>You typed: {text}</p>
    </div>
  );
};

export default Example2;

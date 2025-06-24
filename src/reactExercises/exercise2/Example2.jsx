import React, { useState } from "react";

const Example2 = () => {
  //Example2 : Text Input Component

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Text Input Example</h2>

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

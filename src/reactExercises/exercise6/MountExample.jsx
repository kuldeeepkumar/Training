import React, { useEffect } from "react";
const MountExample = () => {
  // This useEffect runs only once when the component mounts
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component will Unmount");
    };
  }, []); // empty dependency array ensures it run only once after first render
  return (
    <div>
      Add commentMore actions
      <h2>Mounting Example</h2>
      <p>This component logs to console when it mounts and unmounts.</p>
    </div>
  );
};

export default MountExample;

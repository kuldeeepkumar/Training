import React, { useEffect } from "react";

const MountExample = () => {
  // This useEffect runs only once when the component mounts
  useEffect(() => {
    console.log("Component mounted");

    // Optional cleanup (used during unmounting)
    return () => {
      console.log("Cleanup on unmount");
    };
  }, []); // empty dependency array ensures it runs only once after first render

  return (
    <div>
      <h2>Mounting Example</h2>
      <p>This component logs to console when it mounts and unmounts.</p>
    </div>
  );
};
export default MountExample;

import React, { useEffect } from "react";

const MountExample = () => {
  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("cleanup on unmount");
    };
  }, []);

  return (
    <div>
      <h2>Mounting Example</h2>
      <p>This component logs to console when it mounts and unmounts.</p>
    </div>
  );
};

export default MountExample;

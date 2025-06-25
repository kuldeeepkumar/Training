import React, { useEffect } from "react";
const UnmountExample = () => {
  // Simulate a side effect like a timer or subscription
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    // Cleanup function to stop the timer when the component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleaned up on unmount");
    };
  }, []); // run once on mount

  return (
    <div>
      <h2>Unmounting Example</h2>
      <p>Check the console for timer logs. When unmounted, it stops.</p>
    </div>
  );
};

export default UnmountExample;
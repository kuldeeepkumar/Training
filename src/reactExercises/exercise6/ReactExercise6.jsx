import React, { useState } from "react";

import MountExample from "./MountExample";
import UnmountExample from "./UnmountExample";
import UpdateExample from "./UpdateExample";

const ReactExercise6 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && (
        <div>
           <MountExample /> 
          < UnmountExample /> 
          <UpdateExample />
        </div>
      )}
    </div>
  );
};

export default ReactExercise6;
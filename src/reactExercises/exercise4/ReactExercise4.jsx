import React from "react";

// Example array of data
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
  { id: 104, name: "Raaju" },
];

// Functional component to display list of users
function ReactExercise4() {
  return (
    <div>
      <h2>User List</h2>

      {/* Using map() to dynamically render the list */}
      <ul>
        {users.map((user) => (
          // Each list item should have a unique key (we use user.id here)
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReactExercise4;

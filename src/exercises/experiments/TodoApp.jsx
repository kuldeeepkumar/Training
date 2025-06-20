import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    if (editId) {
      // Edit existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text: input } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      // Create new todo
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInput("");
  };

  // Delete todo
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Toggle completed
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Edit todo
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo...."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#aaa" : "#333",
              }}
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <div>
              <button onClick={() => handleEdit(todo)} style={styles.editBtn}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                style={styles.delBtn}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "10ppx solid #ccc",
    borderRadius: "10px",
    fontFamily: "Lato",
    backgroundColor: "silver",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "BLACK",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoText: {
    cursor: "pointer",
  },
  editBtn: {
    marginRight: "10px",
    backgroundColor: "BLACK",
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "10px",
  },
  delBtn: {
    backgroundColor: "BLACK",
    border: "none",
    color: "white",
    padding: "5px 10px",
    borderRadius: "20px",
  },
};

export default TodoApp;

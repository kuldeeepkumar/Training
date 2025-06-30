import React, { useState } from "react";
import './ToDo.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    if (editId) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text: input } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className='container'>
      <h1 className='heading'>Todo List</h1>

      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo..."
          className='input'
        />
        <button type="submit" className='button'>
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul className='list'>
        {todos.map((todo) => (
          <li key={todo.id} className='listItem'>
            <span
              className='todoText'
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#aaa" : "#333",
              }}
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <div>
              <button onClick={() => handleEdit(todo)} className='editBtn'>
                Edit
              </button>
              <button onClick={() => handleDelete(todo.id)} className='delBtn'>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

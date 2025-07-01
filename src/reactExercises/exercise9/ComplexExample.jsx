import React, { useReducer } from "react";

// Initial form state
const initialFormState = {
  name: "",
  email: "",
  age: "",
};

// Reducer function to update form fields or reset
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return initialFormState;
    default:
      return state;
  }
}

// Main Form component
function ComplexExample() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  // Handle input changes
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formState, null, 2));
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={formState.name} onChange={handleChange} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Email: </label>
          <input name="email" value={formState.email} onChange={handleChange} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Age: </label>
          <input name="age" value={formState.age} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ComplexExample;

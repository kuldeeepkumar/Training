import React, { useState } from "react";

const FormHandling = () => {
  const [thanksScreen, setThanksScreen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    agree: false,
    gender: "",
  });

  // handle text, email, select
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    if(
        formData.username &&
         formData.email &&
          formData.agree && 
          formData.gender){
            setThanksScreen((prev) =>!prev);
          } else {
        alert("Please fill the fields");
    }
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {thanksScreen ? (
          <div>
            <h2>Thanks For Filling The Form Please check your details ☺️ </h2>

            <div style={{ border: "1px solid red", padding: "10px" }}>
              <p>Name :{formData.username} </p>
              <p>Email ID :{formData.email} </p>
              <p>Gender :{formData.gender} </p>
              <p>
                Terms & Conditions :{formData.agree ? "Agreed" : "Not Agreed"}{" "}
              </p>
              <br />
              <br />
            </div>
            <br />
            <br />
          </div>
        ) : (
          <div>
            <h2>Form Input Handling</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <br />

            <label>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              I agree to terms
            </label>
            <br />
            <br />

            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <br />
            <br />
          </div>
        )}
        {!thanksScreen ? (
          <button type="submit">Submit</button>
        ) : (
          <button type="submit">Edit Form</button>
        )}
      </form>
    </div>
  );
};

export default FormHandling;
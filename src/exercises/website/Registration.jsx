import React from "react";
const Registration = () => {
  return (
    <>
      <div id="header">
        <h1>Online Votion System</h1>
        <hr></hr>
      </div>
      <h2>Registration</h2>
      <form action="">
        <input id="name" type="text" placeholder="Enter Name"></input>
        <input id="mobile" type="number" placeholder="Enter Mobile"></input>
        <br></br>
        <br></br>

        <input id="pass1" type="password" placeholder="Enter Password"></input>
        <input id="cpass2" type="password" placeholder="Conform Password"></input>
        <br></br>
        <br></br>

<input id="address" type="text" placeholder="Address"></input>
        <br></br>
        <br></br>
<center>
        <div id="imagePart">
        Upload image:<input type="file" name="Phone"></input>
        </div>
        <br></br>

        <div id="role">
          Select your role:
          <select id="role" name="Choose">
            <option value="1">Voter</option>
            <option value="1">Group</option>
          </select>
        </div>
        <br></br>

        <button id="registrationPart">Register</button>
        <br></br>
        </center>
      </form>
      Already User? <a href="">Login here</a>
      
    </>
  );
};

export default Registration;

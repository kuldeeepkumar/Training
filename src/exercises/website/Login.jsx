import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <center>
          <div id="headerSection">
            <h1>Online Voting System</h1>
            <hr></hr>
          </div>
          <h2>Login</h2>
          <form action="">
            <input id="ph" type="number" placeholder="Enter Mobile"></input>
            <br></br>
            <br></br>
            <input
              id="pass"
              type="password"
              placeholder="Enter Password"
            ></input>
            <br></br>
            <br></br>

            <select id="selectSection">
              <option value="1">Voter</option>
              <option value="1">Group</option>
            </select>
            <br></br>
            <br></br>

            <button id="loginButton">Login</button>
          </form>
          New User? <a href="">Register here</a>
        </center>
      </div>
    </>
  );
};

export default Login;

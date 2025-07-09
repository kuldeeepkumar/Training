import React from "react";
import web from "./website.module.css";

const Login = () => {
  return (
    <>
      <div>
        <center>
          <div className={web.headerSection}>
            <h1>Online Voting System</h1>
            <hr></hr>
          </div>
          <h2>Login</h2>
          <form action="">
            <input className={web.ph} type="number" placeholder="Enter Mobile"></input>
            <br></br>
            <br></br>
            <input
              className={web.pass}
              type="password"
              placeholder="Enter Password"
            ></input>
            <br></br>
            <br></br>

            <select className={web.selectSection}>
              <option value="1">Voter</option>
              <option value="1">Group</option>
            </select>
            <br></br>
            <br></br>

            <button className={web.loginButton}>Login</button>
          </form>
          New User? <a href="">Register here</a>
        </center>
      </div>
    
    </>
  );
};

export default Login;

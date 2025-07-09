import React from "react";

import web from "./website.module.css";
const Registration = () => {
  return (
    <>
      <div className={web.header}>
        <h1>Online Votion System</h1>
        <hr></hr>
      </div>
      <h2>Registration</h2>
      <form action="">
        <input className={web.name} type="text" placeholder="Enter Name"></input>
        <input className={web.mobile} type="number" placeholder="Enter Mobile"></input>
        <br></br>
        <br></br>

        <input className={web.pass1} type="password" placeholder="Enter Password"></input>
        <input className={web.cpass2} type="password" placeholder="Conform Password"></input>
        <br></br>
        <br></br>

<input className={web.address} type="text" placeholder="Address"></input>
        <br></br>
        <br></br>
<center>
        <div className={web.imagePart}>
        Upload image:<input type="file" name="Phone"></input>
        </div>
        <br></br>

        <div className={web.role}>
          Select your role: 
          <select className={web.role} name="Choose">
            <option value="1">Voter</option>
            <option value="1">Group</option>
          </select>
        </div>
        <br></br>

        <button className={web.registrationPart}>Register</button>
        <br></br>
        </center>
      </form>
      Already User? <a href="">Login here</a>

    
      
    </>
  );
};

export default Registration;

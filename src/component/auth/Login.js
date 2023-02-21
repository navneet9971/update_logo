import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import logo from '../assets/Eikomp Logo.png';

function Login() {
  return (  

    
    <div className="container">
      <form action="" className="form">
        <div style={{ position: "relative" }}>
          <img  className ="logo" src={logo} alt="Eikomp" />
        </div>
        <p>Don't have an account?</p>

        <input type="submit" value="Sing up" id="singup" />
        <h3>WELCOME</h3>
        <input
          type="email"
          name="email"
          className="box"
          placeholder="Username"
          value="Username"
        />
        <input
          type="email"
          name="email"
          className="boxx"
          placeholder="Password"
          value="Password"
        />
        <input type="submit" value="LOGIN" id="submit" />
        <Link to='#'>Forget Password?</Link>
      </form>
    </div>
  );
}

export default Login;

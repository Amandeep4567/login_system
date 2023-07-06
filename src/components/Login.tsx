import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const forgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div>
      <h1>Log In</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input required type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input required type="password" />
          <p>
            <button onClick={forgotPassword}>Forgot Password</button>
          </p>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

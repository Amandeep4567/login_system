import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    console.log("Forgot password:", email);
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleForgotPassword}>Reset Password</button>
      <p>
        Remember your password? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;

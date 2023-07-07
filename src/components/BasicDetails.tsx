import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BasicDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/address");
  };

  return (
    <div className="container">
      <h2>Step 1: Basic Details</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default BasicDetails;

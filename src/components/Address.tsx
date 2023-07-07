// AddressPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Address = () => {
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/file-upload");
  };

  return (
    <div className="container">
      <h2>Step 2: Address</h2>
      <div>
        <label>Address Line 1:</label>
        <input
          type="text"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
        />
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type="text"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        <label>Pincode:</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Address;

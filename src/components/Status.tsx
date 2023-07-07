import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Status = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="container">
      <h2>Step 5: Status</h2>
      <p>Form submitted successfully!</p>
    </div>
  );
};

export default Status;

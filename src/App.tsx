import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, ForgotPassword } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;

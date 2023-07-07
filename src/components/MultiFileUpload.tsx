import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MultiFileUploadPage = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleMultipleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleNext = () => {
    navigate("/status");
  };

  return (
    <div className="container">
      <h2>Step 4: Multi File Upload</h2>
      <div>
        <label>Upload Files (PNG or PDF):</label>
        <input
          type="file"
          accept=".png,.pdf"
          multiple
          onChange={handleMultipleFileUpload}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default MultiFileUploadPage;

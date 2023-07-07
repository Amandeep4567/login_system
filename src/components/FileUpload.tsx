import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleNext = () => {
    navigate("/multi-file-upload");
  };

  return (
    <div className="container">
      <h2>Step 3: File Upload</h2>
      <div>
        <label>Upload File (PNG or PDF):</label>
        <input type="file" accept=".png,.pdf" onChange={handleFileUpload} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default FileUploadPage;

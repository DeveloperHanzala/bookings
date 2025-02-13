import React, { useState } from "react";

const Step7_form = ({ formData, id, handleChange }) => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedExtensions = ["ply", "las", "pcd", ".laz" ,".xyz",".pts" , ".e57"];
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        setMessage(file.name);
        setIsError(false);
        handleChange(e);
      } else {
        setMessage("Error: Invalid file format");
        setIsError(true);
      }
    }
  };

  return (
    <div className="p-5">
      <div className="container text-center d-flex flex-column align-items-center justify-content-center p-5">
        <h2 className="fw-bold coloa">Only Lidar Scanner File Upload</h2>
        <div className="col-md-12 text-center">
          <label htmlFor="file-upload" className="buttonass">
            Upload File
          </label>
        </div>
        <input
          id="file-upload"
          name="lidar"
          type="file"
          accept=".ply,.las,.glb,.obj"
          className="none"
          onChange={onFileChange}
        />
        {message && (
          <p style={{ color: isError ? "red" : "black" }}>{message}</p>
        )}
      </div>
    </div>
  );
};

export default Step7_form;

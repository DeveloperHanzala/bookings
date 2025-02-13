import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const ConfirmPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const location = useLocation();
  const navigate = useNavigate();

  // Extract the PIN from the previous component (Pin)
  const pin = location.state?.pin || "";

  const handleSubmit = async () => {
    if (!newPassword) {
      setMessage({ type: "danger", text: "Please enter a new password." });
      return;
    }
  
    try {
      const response = await axios.post("https://testing.techionik.com/api/reset-password/", {
        pin,
        new_password: newPassword,
      });
  
      console.log("API Response:", response.data); // Debugging
  
      if (response.status === 200) {
        setMessage({ type: "success", text: "Password reset successfully!" });
        // Delete the saved email from localStorage
        localStorage.removeItem("userEmail");
        // Navigate to login after a short delay
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage({ type: "danger", text: response.data.message || "Failed to reset password." });
      }
    } catch (error) {
      console.error("Error:", error.response?.data); // Debugging
      setMessage({ type: "danger", text: error.response?.data?.message || "Something went wrong!" });
    }
  };
  
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="fw-bold">SET A NEW PASSWORD</h2>
      <p className="text-center text-muted mb-4">
        Create a new password. Ensure it differs from previous ones for security.
      </p>

      {message.text && <div className={`alert alert-${message.type} w-50 text-center`}>{message.text}</div>}

      <div className="w-50">
        <label className="form-label fw-semibold">New Password</label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <button className="submit-btn w-50 mt-4 py-2" onClick={handleSubmit}>
        Continue
      </button>
    </div>
  );
};

export default ConfirmPassword;

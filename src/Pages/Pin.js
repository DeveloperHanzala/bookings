import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Pin = () => {
  const [pin, setPin] = useState(["", "", "", ""]); // 4-digit PIN
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user email from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      let newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Move focus to the next input field (if it's not the last input)
      if (value && index < 3) { 
        const nextInput = document.getElementById(`pin-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = () => {
    const pinCode = pin.join("");
    if (pinCode.length !== 4) {
      setError("Please enter a 4-digit code.");
      return;
    }

    setError("");
    console.log("Payload:", pinCode);

    // Navigate to the next component and pass the payload
    navigate("/confirm-password", { state: { pin: pinCode } });
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className="mb-2">CHECK YOUR EMAIL</h2>
      <p className="text-center mb-3">
        We sent a reset link to <strong>{email || "your email"}</strong> <br />
        Enter the 4-digit code mentioned in the email.
      </p>

      <div className="d-flex gap-2 mb-3">
        {pin.map((digit, index) => (
          <input
            key={index}
            id={`pin-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            className="form-control text-center"
            style={{ width: "50px", height: "50px", fontSize: "24px", textAlign: "center" }}
          />
        ))}
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <button className="submit-btn mt-3" onClick={handleSubmit}>
        Verify Code
      </button>

      <p className="mt-2">
        Haven't got the email yet? <Link className='highlight1' to={'/forget-password'}>Resend email</Link>
      </p>
    </div>
  );
};

export default Pin;

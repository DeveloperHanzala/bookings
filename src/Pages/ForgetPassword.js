import React, { useState } from 'react';
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post("https://backend.homecert.ie/api/forgot-password/", { email });

      if (response.data && response.data.email) {
        localStorage.setItem("userEmail", response.data.email);
      }

      setMessage(response.data.message || "Check your email for further instructions.");
      setTimeout(() => {
        navigate("/forget-password/pin");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="login-container">
      <Link to={"/login"}>
        <MdArrowBackIosNew size={30} color="#003366" className='bg-white p-1 rounded-circle' />
      </Link>
      <div className="col-md-12 pt-5">
        <div className='d-flex align-items-center flex-column'>
          <h1>Forgot Password?</h1>
          <p>Please enter your email to reset the password</p>

          <div className='col-md-4 text-start'>
            {message && (
              <div className="alert alert-success" role="alert">
                {message}
              </div>
            )}
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <label>Your Email </label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="submit-btn w-100 mt-3" onClick={handleSubmit}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

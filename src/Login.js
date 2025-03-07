import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi"; // New phone icon
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("Homeowners");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Prepare data based on user type
      const requestData = userType === "Homeowners" 
        ? { email: formData.email, phone_number: formData.phone }
        : { email: formData.email, password: formData.password };

      const response = await axios.post("https://backend.homecert.ie/api/signin/", requestData);

      const userTypeMapping = {
        "Homeowners": "client",
        "Ber Assessor": "accessor",
        "Admin": "admin"
      };

      const expectedUserType = userTypeMapping[userType];
      const actualUserType = response.data.user_type;

      if (!actualUserType) {
        throw new Error("User type not found in response");
      }

      if (actualUserType !== expectedUserType) {
        setError(`Your account is registered as ${actualUserType}, not ${userType}. Please select the correct user type.`);
        return;
      }

      if (response.data.access) {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("first", response.data.first_name);
        localStorage.setItem("last", response.data.last_name);
      }

      switch (userType) {
        case "Homeowners":
          navigate("/client/dashboard");
          break;
        case "Ber Assessor":
          navigate("/accessor/dashboard");
          break;
        case "Admin":
          navigate("/admin/dashboard");
          break;
        default:
          navigate("/client/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Invalid credentials. Please try again.");
      } else if (error.message.includes("User type")) {
        setError(error.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderFields = () => (
    <>
      <div className="input-group">
        <span className="icon"><MdOutlineEmail size={20} /></span>
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      {userType === "Homeowners" ? (
        <div className="input-group">
          <span className="icon"><FiPhone size={20} /></span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <div className="input-group">
          <span className="icon"><RiLockPasswordFill size={20} /></span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      )}
      {userType === "Homeowners" ? (
        <div>
         
        </div>
      ) : (
        <div className="text-end">
        <Link to={'/forget-password'}><p> Forget Password</p></Link>
        </div>
      )}
    </>
  );

  return (
    <div className="login-container">
      <Link to={"/"} >
        <IoMdCloseCircle size={20} color="#003366" />
      </Link>
      <div className="login-left">
      <Link to={"/"} className="d-md-none d-block">
        <IoMdCloseCircle size={20} color="#003366" />
      </Link>
        <div className="text-center">
          <h1>LOGIN</h1>
          <p>How to get started?</p>
          <div className="button-group">
            {["Homeowners", "Ber Assessor", "Admin"].map((type) => (
              <button 
                key={type} 
                className={userType === type ? "active" : ""} 
                onClick={() => setUserType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <form className="login-form text-center" onSubmit={handleLogin}>
          {renderFields()}
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login Now"}
          </button>
        </form>
      </div>
      <div className="login-right image-container"></div>
    </div>
  );
};

export default Login;
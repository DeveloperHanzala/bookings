import React, { useState } from "react";
import './Login.css';
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userType, setUserType] = useState("Homeowners");
  const navigate = useNavigate(); 

  const handleLogin = () => {
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
        break;
    }
  };

  const renderFields = () => {
    switch (userType) {
      case "Homeowners":
        return (
          <>
            <div className="input-group">
              <span className="icon"><MdOutlineEmail size={20} /></span>
              <input type="email" placeholder="Email Address"  />
            </div>
            <div className="input-group">
              <span className="icon"><MdLocalPhone size={20} /></span>
              <input type="text" placeholder="Mobile Number"  />
            </div>
          </>
        );
      case "Ber Assessor":
      case "Admin":
        return (
          <>
            <div className="input-group">
              <span className="icon"><MdOutlineEmail size={20} /></span>
              <input type="email" placeholder="Email Address"  />
            </div>
            <div className="input-group">
              <span className="icon"><RiLockPasswordFill size={20} /></span>
              <input type="password" placeholder="Password"  />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" ">
      <div className="login-container">
        <Link to={"/"}>
          <IoMdCloseCircle size={20} color="#003366" />
        </Link>
        <div className="login-left">
        <Link className="d-md-none" to={"/"}>
          <IoMdCloseCircle size={20} color="#003366" />
        </Link>
          <div className="text-center">
            <h1>LOGIN</h1>
            <p>How to get started?</p>
            <div className="button-group">
              <button
                className={userType === "Homeowners" ? "active" : ""}
                onClick={() => setUserType("Homeowners")}
              >
                Homeowners
              </button>
              <button
                className={userType === "Ber Assessor" ? "active" : ""}
                onClick={() => setUserType("Ber Assessor")}
              >
                Ber Assessor
              </button>
              <button
                className={userType === "Admin" ? "active" : ""}
                onClick={() => setUserType("Admin")}
              >
                Admin
              </button>
            </div>
          </div>
          <form
            className="login-form text-center"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent form default submission
              handleLogin(); // Trigger navigation
            }}
          >
            {renderFields()}
            <button type="submit" className="submit-btn">
              Login Now
            </button>
          </form>
        </div>
        <div className="login-right image-container">
          <div className="image-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const SignUp = () => {
  const [userType, setUserType] = useState("Homeowners");
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    user_type: "client",
    is_staff: false,
    is_superuser: false,
    home_county: "",
    SEAI_registration: "",
    SEAI_accessor_since: "",
    professional_insurance_policy_holder: false,
    VAT_registered: false,
    domestic_or_commercial: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    // Ensure userType is correctly mapped
    let updatedFormData = { ...formData };
  
    if (userType === "Homeowners") {
        updatedFormData = {
            ...updatedFormData,
            user_type: "client", 
          };
    } 
  
    try {
      const response = await axios.post(
        "http://108.129.126.14/api/create/", 
        updatedFormData
      );
      setMessage("Registration Successful!");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setMessage(error.response?.data?.message || "Registration Failed. Try again.");
      console.error("Error Response:", error.response?.data);  // Log the full error for debugging
    }
  };
  
  
  // Dynamically Render Fields
  const renderFields = () => {
    return (
      <>
       
  
       
         {/* Show additional fields only if the user is NOT an Admin */}
         {userType === "Homeowners" && (
          <>
             <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><MdOutlineEmail size={20} /></span>
            <input type="email" name="email" className="form-control" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><FaUserAlt size={20} /></span>
            <input type="text" name="first_name" className="form-control" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><FaUserAlt size={20} /></span>
            <input type="text" name="last_name" className="form-control" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><MdLocalPhone size={20} /></span>
            <input type="text" name="phone_number" className="form-control" placeholder="Mobile Number" value={formData.phone_number} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><RiLockPasswordFill size={20} /></span>
            <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text"><RiLockPasswordFill size={20} /></span>
            <input type="password" name="confirm_password" className="form-control" placeholder="Confirm Password" value={formData.confirm_password} onChange={handleChange} required />
          </div>
        </div>
          </>
        )}
      </>
    );
  };
  
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 p-5 shadow-lg bg-white rounded">
          <Link to={"/"} className="d-block text-end">
            <IoMdCloseCircle size={20} color="#003366" />
          </Link>
          <div className="text-center">
            <h1>Sign Up</h1>
            <div className="button-group my-3">
              <button className={` ${userType === "Homeowners" ? "active" : ""}`} onClick={() => setUserType("Homeowners")}>
                Homeowners
              </button>
              {/* <button className={` ${userType === "Ber Assessor" ? "active" : ""}`} onClick={() => setUserType("Ber Assessor")}>
                Ber Assessor
              </button>
              <button className={` ${userType === "Admin" ? "active" : ""}`} onClick={() => setUserType("Admin")}>
                Admin
              </button> */}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {renderFields()}
            <button type="submit" className="submit-btn w-100 mt-3" disabled={loading}>
              {loading ? "Registering..." : "Sign Up"}
            </button>
            {message && <p className="text-center text-danger mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

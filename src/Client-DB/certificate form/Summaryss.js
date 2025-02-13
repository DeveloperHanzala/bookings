import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Summaryss = ({ formData, prevStep, handleChange, submitForm }) => {
  const [formValues, setFormValues] = useState({
    name: formData.name || "",
    email: formData.email || "",
    mobile: "",
    countryCode: "+1", // Default country code (for example, +1 for US)
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleMobileChange = (e) => {
    handleChange('mobile')(e.target.value);
  };

  const handleCountryCode = (e) => {
    handleChange('countryCode')(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
    <div className="container-fluid step2bg">
<div>
    <div className="row">
        <div className="col-md-12 text-center">
            <h1 className="step1font text-light">Contact</h1>
            <p className="step1para text-light"><Link to={'/'} className="decnone"> Home </Link> <IoIosArrowForward /><span className="text-warning"> Contact</span></p>

        </div>
    </div>

</div>
</div>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className=" p-4" >
        <h5 className="text-center mb-3">Last Step! Get your BER quotes in Cavan</h5>
        <form onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
          {/* Name */}
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-4 col-form-label">Your Name *</label>
            <div className="col-sm-8">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={(e) => handleChange('name')(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4 col-form-label">Your email address *</label>
            <div className="col-sm-8">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email_address || ''}
                onChange={(e) => handleChange('email_address')(e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="mb-3 row">
            <label htmlFor="mobile" className="col-sm-4 col-form-label">Your mobile number *</label>
            <div className="col-sm-8 d-flex">
              {/* Country Code Dropdown */}
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleCountryCode}
                className="form-select me-2"
                style={{ width: "30%" }}
                required
              >
               <option value="+353">+353 (Ireland)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+1">+1 (USA)</option>
              </select>
              {/* Phone Number Input */}
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile || ''}
                onChange={handleMobileChange}
                className="form-control"
                style={{ width: "70%" }}
                required
              />
            </div>
          </div>

          {/* Agree to Terms */}
          <div className="mb-3 row">
           
            <label htmlFor="agreeToTerms" className="form-check-label col-sm-4">
            I agree to the terms & conditions *
            </label>
            <div className="col-sm-8">

            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formValues.agreeToTerms}
              onChange={handleInputChange}
              className="form-check-input shadow-sm"
              required
            />
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn summary-button w-100 mb-3">
          Get Quotes
          </button>
        </form>

       
      </div>
    </div>
    </>
  );
};

export default Summaryss;

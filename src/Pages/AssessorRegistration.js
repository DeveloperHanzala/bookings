import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const AssessorRegistration = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 101 }, (_, i) => currentYear - i);
  const location = useLocation();
  const navigate = useNavigate();
  const [counties] = useState([
    'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin',
    'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim',
    'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan',
    'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Waterford',
    'Westmeath', 'Wexford', 'Wicklow'
  ]);

  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    countryCode: '+353', // default to Ireland
    phone_number: '', // this will store just the number part
    password: '',
    home_county: 'Dublin',
    SEAI_registration: '',
    SEAI_accessor_since: '',
    professional_insurance_policy_holder: "false",
    VAT_registered: "false",
    domestic_or_commercial: 'Domestic',
    preference: [],
    user_type: 'accessor',
    is_staff: false,
    is_superuser: false
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCountyChange = (county) => {
    setFormData((prev) => ({
      ...prev,
      preference: prev.preference.includes(county)
        ? prev.preference.filter((c) => c !== county)
        : [...prev.preference, county]
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Start loading

    if (!formData.SEAI_accessor_since) {
      setError("Please select the year you became an SEAI accessor.");
      setLoading(false); // Stop loading if validation fails
      return;
    }

    // Combine country code and phone number
    const fullPhoneNumber = `${formData.countryCode}${formData.phone_number}`;

    // Build payload with combined phone number
    const payload = {
      ...formData,
      phone_number: fullPhoneNumber, // this now includes country code
      SEAI_accessor_since: `${formData.SEAI_accessor_since}-01-01`,
      professional_insurance_policy_holder: formData.professional_insurance_policy_holder === "true",
      VAT_registered: formData.VAT_registered === "true",
      preference: formData.preference
    };

    try {
      const response = await fetch('https://backend.homecert.ie/api/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Registration failed ${data.detail}` || 'Registration failed Please try again later');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
        setSuccess(true);
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        setSuccess(true);
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading in any case
    }
  };

  return (
    <>
      <div className='container-fluid accessbg' id='assessor'>
        <div id='get-in-touch' className='conatiner-fluid paDa'>
          <div className='text-center'>
            <h1 className='accesshead pt-4 pt-md-0'>Assessor Registration</h1>
          </div>
        </div>
      </div>

      <div className='container p-md-0 mt-5 mb-5'>
        <form className='container px-5 mt-4' onSubmit={handleSubmit}>
          <div className='text-center'> 
            <h1 className='accesshead1'>Sign up to get more BER jobs in your Area</h1>
          </div>
          <div className='row ikcalasss'>
            {/* Left Column */}
            <div className='col-md-6'>
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">First Name</label>
                <div className="col-sm-8">
                  <input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row d-block d-md-none">
                <label className="col-4 fw-bold col-form-label">Last Name</label>
                <div className="col-8">
                  <input
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              {/* Email */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">Email</label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              {/* Phone */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">Phone</label>
                <div className="col-sm-8 d-flex">
                  {/* Country Code Dropdown */}
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
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
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="form-control"
                    style={{ width: "70%" }}
                    required
                  />
                </div>
              </div>
              {/* SEAI Registration */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">SEAI Registration #</label>
                <div className="col-sm-8">
                  <input
                    name="SEAI_registration"
                    value={formData.SEAI_registration}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              {/* Professional Insurance */}
              <div className="mb-3 row">
                <label className="col-sm-6 fw-bold col-form-label">Professional Insurance</label>
                <div className="col-sm-6">
                  <select
                    name="professional_insurance_policy_holder"
                    value={formData.professional_insurance_policy_holder}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className='col-md-6'>
              <div className="mb-3 row">
                <label className="col-sm-4 d-none d-md-block fw-bold col-form-label">Last Name</label>
                <div className="col-sm-8 d-none d-md-block">
                  <input
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              {/* Password */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">Password</label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              {/* Home County */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">Home County</label>
                <div className="col-sm-8">
                  <select
                    name="home_county"
                    value={formData.home_county}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    {counties.map((county) => (
                      <option key={county} value={county}>
                        {county}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* SEAI Since */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">SEAI Since</label>
                <div className="col-sm-8">
                  <select
                    name="SEAI_accessor_since"
                    value={formData.SEAI_accessor_since}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* VAT Registered */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">VAT Registered</label>
                <div className="col-sm-8">
                  <select
                    name="VAT_registered"
                    value={formData.VAT_registered}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
              </div>
              {/* Domestic or Commercial */}
              <div className="mb-3 row">
                <label className="col-sm-4 fw-bold col-form-label">Domestic or Commercial</label>
                <div className="col-sm-8">
                  <select
                    name="domestic_or_commercial"
                    value={formData.domestic_or_commercial}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="Domestic">Domestic</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Counties Selection */}
          <div className='row mt-4 ikcalasss'>
            <div className='text-center pb-4'>
              <h1 className='accesshead1'>
                Select the counties you would like to receive jobs in:
              </h1>
            </div>
            {counties.map((county, index) => (
              <div className='col-md-2 col-6' key={county}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id={`county-${index}`}
                    checked={formData.preference.includes(county)}
                    onChange={() => handleCountyChange(county)}
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor={`county-${index}`}>
                    Co. {county}
                  </label>
                </div>
              </div>
            ))}
          </div>
          {/* Submit Button */}
          <div className='text-center mt-4'>
            <button 
              type="submit" 
              className='btn button2 fs-5'
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <>
                  <span 
                    className="spinner-border spinner-border-sm" 
                    role="status" 
                    aria-hidden="true"
                  ></span>
                  {' '}Processing...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && <div className="alert alert-success mt-3">Registration successful!</div>}
          </div>
        </form>
      </div>
    </>
  );
};

export default AssessorRegistration;
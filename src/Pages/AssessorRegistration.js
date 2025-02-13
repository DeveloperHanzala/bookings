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
        phone_number: '',
        password: '',
        home_county: '',
        SEAI_registration: '',
        SEAI_accessor_since: currentYear,
        professional_insurance_policy_holder: false,
        VAT_registered: false,
        domestic_or_commercial: '',
        selected_counties: [],
        user_type: 'accessor',
        is_staff: false,
        is_superuser: false
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCountyChange = (county) => {
        setFormData(prev => ({
            ...prev,
            selected_counties: prev.selected_counties.includes(county)
                ? prev.selected_counties.filter(c => c !== county)
                : [...prev.selected_counties, county]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        const payload = {
            ...formData,
            SEAI_accessor_since: `${formData.SEAI_accessor_since}-01-01`,
            professional_insurance_policy_holder: formData.professional_insurance_policy_holder === "true",
            VAT_registered: formData.VAT_registered === "true",
        };

        try {
            const response = await fetch('https://testing.techionik.com/api/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className='container-fluid accessbg' id='assessor'>
                {/* ... existing header code ... */}
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
                                <div className="col-sm-8">
                                    <input
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleInputChange}
                                        className="form-control"
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

                            {/* Insurance Policy */}
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
                                <label className="col-sm-4 fw-bold col-form-label">Last Name</label>
                                <div className="col-sm-8">
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
                                        {counties.map(county => (
                                            <option key={county} value={county}>{county}</option>
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
                                    >
                                        {years.map(year => (
                                            <option key={year} value={year}>{year}</option>
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
                        </div>
                    </div>

                    {/* Counties Selection */}
                    <div className='row mt-4  ikcalasss'>
                    <div className='text-center pb-4'>
              <h1 className='accesshead1'>Select the counties you would like to receive jobs in:</h1>  
    </div>
                        {counties.map((county, index) => (
                            <div className='col-md-2 col-6 '  key={county}>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        id={`county-${index}`}
                                        checked={formData.selected_counties.includes(county)}
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
                        <button type="submit" className='btn button2 fs-5'>
                            Submit Application
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
import React, { useState } from "react";
import { FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";

const Step3 = ({ nextStep, prevStep, handleChange }) => {
  const [selectedName, setSelectedName] = useState(null);

  // Map display names to backend's stored values
  const validOptions = {
    "Detached": "detached",
    "Semi-detached": "Semi-detached",
    "Mid-terrace": "mid-terrace",
    "Apartment": "apartment",
    "Duplex": "duplex",
    "Bunglow": "bunglow", // Matches backend's typo
    "Multi-unit": "multi-unit",
    "Other": "other"
  };

  // Update display names to match backend's labels exactly
  const names = [
    "Detached", "Semi-detached", "Mid-terrace", "Apartment",
    "Duplex", "Bunglow", "Multi-unit", "Other"
  ];

  const handleNameClick = (displayName) => {
    const apiValue = validOptions[displayName];
    setSelectedName(displayName);
    handleChange('building_type')(apiValue);
    if (nextStep) {
      nextStep();
    }// Automatically move to the next step
  };

  return (
    <div>
      <div className="container-fluid step3bg">
        <div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="step1font text-light">What type of property is it?</h1>
              <p className="step1para text-light">Assessors need this information to give you an accurate price</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 col-md-12 px-5 px-md-0">
            <div className="d-flex flex-column flex-md-row">
              {names.slice(0, 4).map((name) => (
                <button
                  key={name}
                  className={`btn mx-2 step3button w-100 mb-2 ${
                    name === selectedName ? "selected" : ""
                  }`}
                  onClick={() => handleNameClick(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="col-12 col-md-12 px-5 px-md-0">
            <div className="d-flex flex-column flex-md-row">
              {names.slice(4, 8).map((name) => (
                <button
                  key={name}
                  className={`btn mx-2 step3button w-100 mb-2 ${
                    name === selectedName ? "selected" : ""
                  }`}
                  onClick={() => handleNameClick(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <button
            onClick={prevStep}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#003366",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaLongArrowAltLeft />
          </button>

          <button
            onClick={nextStep}
            style={{
              padding: "10px 20px",
              backgroundColor: selectedName ? "#003366" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              cursor: selectedName ? "pointer" : "not-allowed",
              fontSize: "14px",
            }}
            disabled={!selectedName}
          >
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
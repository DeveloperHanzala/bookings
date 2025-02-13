import React, { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Step8 = ({ nextStep, prevStep, handleChange }) => {
  const [selectedName, setSelectedName] = useState(null);

  // Handle name selection
  const handleNameClick = (name) => {
    handleChange('county')(name);
    setSelectedName(name);
    if (nextStep) {
      nextStep();
    } 
  };

  const names = [
    "Carlow", "Cavan", "Clare", "Cork",
    "Donegal", "Dublin", "Galway", "Kerry",
    "Kildare", "Kilkenny", "Laois", "Leitrim",
    "Limerick", "Longford", "Louth", "Mayo",
    "Meath", "Monaghan", "Offaly", "Roscommon",
    "Sligo", "Tipperary", "Waterford", "Westmeath",
    "Wexford", "Wicklow",
  ];

  return (
    <div>
<div className="container-fluid step3bg">
<div>
    <div className="row">
        <div className="col-md-12 text-center">
            <h1 className="step1font text-light">What county is the property in?</h1>
            <p className="step1para text-light">Almost done, just 3 more questions.</p>

        </div>
    </div>

</div>
</div>


      {/* Name Selector Section using Bootstrap Grid */}
      <div className="container mt-5 mb-5">
      <div className="row">
          {Array.from({ length: Math.ceil(names.length / 4) }, (_, rowIndex) => (
            <div key={rowIndex} className="col-12 col-md-12 px-5 px-md-0">
              <div className="d-flex flex-column flex-md-row">
                {names.slice(rowIndex * 4, rowIndex * 4 + 4).map((name) => (
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
          ))}
        </div>
      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px", display:"flex", alignItems:"center",justifyContent:"center" }}>
        {/* Previous Button (Step1) */}
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

        {/* Next Button (Step3) */}
        <button
          onClick={nextStep}
          style={{
            padding: "10px 20px",
            backgroundColor: selectedName ? "#003366" : "#ccc", // Disable until selection is made
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            cursor: selectedName ? "pointer" : "not-allowed",
            fontSize: "14px",
          }}
          disabled={!selectedName} // Disable next step if no selection is made
        >
          <FaLongArrowAltRight />
        </button>
      </div>
      </div>

    </div>
  );
};

export default Step8;

import React, { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Step10 = ({ nextStep, prevStep, handleChange }) => {
  const [selectedName, setSelectedName] = useState(null);

  // Handle name selection
  const handleNameClick = (name) => {
    handleChange('ber_purpose')(name);
    setSelectedName(name);
    if (nextStep) {
      nextStep();
    } 
  };

  const names = [
    "Selling", "Letting", "New Build","Gov Grant", // Column 1
    //  "Arva", "Finea", "Gowna","Larah", // Column 2
  ];

  return (
    <div>
<div className="container-fluid step3bg">
<div>
    <div className="row">
        <div className="col-md-12 text-center">
            <h1 className="step1font text-light">What is the purpose of the BER?</h1>
            <p className="step1para text-light">If you're applying for an SEAI grant for solar, heating upgrades etc, please select 'Govt grant'.</p>

        </div>
    </div>

</div>
</div>


      {/* Name Selector Section using Bootstrap Grid */}
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-md-12 px-5 px-md-0">
            <div className="d-flex flex-column flex-md-row">
              {names.slice(0, 4).map((name) => (
                <button
                  key={name}
                  className={`btn mx-2 step3button w-100 mb-2 ${name === selectedName ? "selected" : ""}`}
                  onClick={() => handleNameClick(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          
      
          
        
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

export default Step10;

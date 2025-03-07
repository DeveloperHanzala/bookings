import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Step5 = ({ nextStep, prevStep, handleChange }) => {
  const [selectedName, setSelectedName] = useState(null);

  const handleNameClick = (name) => {
    handleChange('bedrooms')(name);
    setSelectedName(name);
    if (nextStep) {
      nextStep();
    } 
  };
  const names = [
    "01", "02", "03", "04", // Column 1
    "05", "06", "07", "08", // Column 2
  ];
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div>
<div className="container-fluid step3bg">
<div  className="paDa">
    <div className="row">
        <div className="col-md-12 text-center">
            <h1 className="step1font d-none d-md-block text-light">How many bedrooms?</h1>
            <p className=" fs-1 d-block d-md-none text-light" style={{fontFamily:'Libre Baskerville'}} >How many bedrooms?</p>
            <p className="step1para text-light">Please include all bedrooms regardless of their use.</p>

        </div>
    </div>

</div>
</div>


      {/* Name Selector Section using Bootstrap Grid */}
      <div className="container-fluid nooverflowx mt-5 mb-5">
        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-md-12 px-5 px-md-0 marg">
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
          
          {/* Column 2 */}
          <div className="col-12 col-md-12 px-5 px-md-0 marg">
            <div className="d-flex flex-column flex-md-row">
              {names.slice(4, 8).map((name) => (
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
        Back
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
         Forward
        </button>
      </div>
      </div>

    </div>
  );
};

export default Step5;

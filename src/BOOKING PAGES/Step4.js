import React, { useEffect, useState } from "react";

const Step4 = ({ nextStep, prevStep, handleChange }) => {
  const [selectedName, setSelectedName] = useState(null);
  const [isSquareMeters, setIsSquareMeters] = useState(false);

  // Handle name selection
  const handleNameClick = (name) => {
    handleChange("property_size")(name);
    setSelectedName(name);
    if (nextStep) {
      nextStep();
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Conversion from sq ft to sq meters (1 sq ft = 0.092903 sq meters)
  const namesSqFt = ["Under 1000", "1000-2500", "2500-3000", "3000-3500", "3500-4000", "4000-4500", "4500-5000", "5000+"];

  const convertToSqMeters = (sqFtRange) => {
    if (sqFtRange === "Under 1000") return "Under 93";
    if (sqFtRange === "1000-2500") return "93-232";
    if (sqFtRange === "2500-3000") return "232-279";
    if (sqFtRange === "3000-3500") return "279-325";
    if (sqFtRange === "3500-4000") return "325-372";
    if (sqFtRange === "4000-4500") return "372-418";
    if (sqFtRange === "4500-5000") return "418-465";
    return "465+";
  };

  const names = isSquareMeters ? namesSqFt.map(convertToSqMeters) : namesSqFt;

  return (
    <div>
      <div className="container-fluid step3bg">
        <div className="paDa">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="step1font d-none d-md-block text-light">What size is the property? (sq. ft.)</h1>
              <p className="fs-1 d-block d-md-none text-light" style={{ fontFamily: "Libre Baskerville" }}>
                What size is the property? (sq. ft.)
              </p>
              <p className="step1para text-light">
                An average 3-bed semi is approximately 1200 square feet.{" "}
                <span
                  onClick={() => setIsSquareMeters(!isSquareMeters)}
                  style={{ fontWeight: "bold", cursor: "pointer", textDecoration: "underline" }}
                >
                  Switch to {isSquareMeters ? "square feet" : "square metres"}.
                </span>
              </p>
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
              {names.slice(0, 4).map((name, index) => (
                <button
                  key={index}
                  className={`btn mx-2 step3button w-100 mb-2 ${name === selectedName ? "selected" : ""}`}
                  onClick={() => handleNameClick(name)}
                >
                  {name} {isSquareMeters ? "m²" : "ft²"}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-md-12 px-5 px-md-0 marg">
            <div className="d-flex flex-column flex-md-row">
              {names.slice(4, 8).map((name, index) => (
                <button
                  key={index}
                  className={`btn mx-2 step3button w-100 mb-2 ${name === selectedName ? "selected" : ""}`}
                  onClick={() => handleNameClick(name)}
                >
                  {name} {isSquareMeters ? "m²" : "ft²"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;

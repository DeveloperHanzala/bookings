import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Step2 = ({ nextStep, prevStep, handleChange }) => {
  const [hour, setHour] = useState(12); // Default hour
  const [minute, setMinute] = useState(0); // Default minute
  const [ampm, setAmpm] = useState("AM"); // Default AM/PM
  const [isHourSelection, setIsHourSelection] = useState(true); // Toggle between hour and minute selection

  // Toggle between AM and PM
  const toggleAmPm = () => setAmpm(ampm === "AM" ? "PM" : "AM");

  // Handle the click event for selecting hour or minute
  const handleClockClick = (value) => {
    if (isHourSelection) {
      setHour(value); // Set hour
      setIsHourSelection(false); // Switch to minute selection automatically
    } else {
      setMinute(value); // Set minute
    }
  };

  // Call the handleChange function from the parent to update the state
  useEffect(() => {
    const formattedTime = `${hour}:${minute.toString().padStart(2, '0')} ${ampm}`;
    handleChange('preferred_time')(formattedTime);
    
  }, [hour, minute, ampm]);
  // ... rest of the component

  return (
    <>
    <div className="container-fluid step2bg">
<div>
    <div className="row">
        <div className="col-md-12 text-center">
            <h1 className="step1font text-light">Your Preferred Time</h1>
            <p className="step1para text-light">A typical BER assessment takes around<span className="text-warning">  1-hour.</span></p>

        </div>
    </div>

</div>
</div>
    <div className="time-picker-container pt-5 pb-5">
      <h2>Select Time</h2>

      {/* Time Display */}
      <div className="time-display">
        <div className="time-box">{hour}</div>
        <span>:</span>
        <div className="time-box">{minute.toString().padStart(2, "0")}</div>
        <div className="ampm-box" onClick={toggleAmPm}>
          {ampm}
        </div>
      </div>

      {/* Circular Clock */}
      <div className="clock-container">
        <div className="clock-face">
          {Array.from({ length: isHourSelection ? 12 : 60 }, (_, i) => {
            const value = isHourSelection ? (i === 0 ? 12 : i) : i; // Hours (1-12), wrap 0 to 12
            if (!isHourSelection && value % 5 !== 0) return null; // Show only 0, 5, 10, ... for minutes

            const totalSteps = isHourSelection ? 12 : 60; // Steps based on hours or minutes
            const angle = (i * (360 / totalSteps)) - 90; // Calculate angle for placement
            const x = Math.cos((angle * Math.PI) / 180) * 100; // X-coordinate
            const y = Math.sin((angle * Math.PI) / 180) * 100; // Y-coordinate
            const style = {
              position: "absolute",
              left: `calc(50% + ${x}px - 20px)`, // Center the button
              top: `calc(50% + ${y}px - 20px)`, // Center the button
            };

            return (
              <button
                key={value}
                className={
                  (isHourSelection && hour === value) ||
                  (!isHourSelection && minute === value)
                    ? "clock-number active"
                    : "clock-number"
                }
                onClick={() => handleClockClick(value)}
                style={style}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>

      {/* Toggle between Hour and Minute Selection */}
      <button
        onClick={() => setIsHourSelection(!isHourSelection)}
        className="toggle-button"
      >
        {isHourSelection ? "Switch to Minute Selection" : "Switch to Hour Selection"}
      </button>

      {/* Action Buttons */}
      <div style={{ marginTop: "20px" }}>
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
            backgroundColor: hour && minute !== null ? "#003366" : "#ccc", // Ensure valid time selection
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            cursor: hour && minute !== null ? "pointer" : "not-allowed",
            fontSize: "14px",
          }}
          disabled={hour === null || minute === null} // Disable next step if no valid time
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
    </>
  );
};

export default Step2;

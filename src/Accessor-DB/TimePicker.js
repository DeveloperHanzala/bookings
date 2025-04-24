import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const TimePicker = () => {
  // Set default hour to 14 (which is in the PM set) and default ampm to "PM"
  const [hour, setHour] = useState(14);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmpm] = useState("PM");
  const [isHourSelection, setIsHourSelection] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const jobData = location.state?.jobData;
  const formattedDate = location.state?.formattedDate;
  // Toggle between AM and PM and adjust hour if needed
  const toggleAmPm = () => {
    const newAmpm = ampm === "AM" ? "PM" : "AM";
    let newHour = hour;
    // Convert hour if it doesn't exist in the new set
    if (newAmpm === "AM") {
      // For AM, valid hours are [12,1,2,...,11]. If hour is >12, subtract 12.
      if (hour > 12) {
        newHour = hour - 12;
      }
    } else {
      // For PM, valid hours are [12,13,...,23]. If hour is less than 12, add 12.
      if (hour < 12) {
        newHour = hour + 12;
      }
    }
    setAmpm(newAmpm);
    setHour(newHour);
  };

  // Handle clock click for hour or minute selection
  const handleClockClick = (value) => {
    if (isHourSelection) {
      setHour(value);
      setIsHourSelection(false); // Switch automatically to minute selection
    } else {
      setMinute(value);
    }
  };

  const handleNext = () => {
    // Format the time in 24-hour format
    const formatted24HourTime = `${hour}:${minute.toString().padStart(2, "0")}`;
    
    navigate(`/accessor/quote/${jobData.id}`, {
      state: {
        jobData: jobData,
        formattedDate: formattedDate,
        formattedTime: formatted24HourTime,
        ampm: ampm
      }
    });
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Format time in 24-hour format (e.g. "14:05") and update parent state.
  const handleBack = () => {
    navigate(-1); // Go back to date picker
  };
  // Prepare the hours array based on ampm
  const hoursArray =
    ampm === "AM"
      ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      : [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  return (
    <>
      <div className="container-fluid step2bg">
        <div className="paDa">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="step1font d-none d-md-block text-light">
                Your Preferred Time
              </h1>
              <p
                className="fs-1 d-block d-md-none text-light"
                style={{ fontFamily: "Libre Baskerville" }}
              >
                Your Preferred Time
              </p>
              <p className="step1para text-light">
                A typical BER assessment takes around
                <span className="text-warning"> 1-hour.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="time-picker-container pt-4 pt-md-5 pb-5">
        <h2>Select Time</h2>

        {/* Time Display */}
        <div className="time-display">
          <div className="time-box">{hour}</div>
          <span>:</span>
          <div className="time-box">{minute.toString().padStart(2, "0")}</div>
          {/* 
            Although this box toggles the AM/PM state (which determines the available hours),
            the formatted time sent out is in 24-hour format.
          */}
          <div className="ampm-box" onClick={toggleAmPm}>
            {ampm}
          </div>
        </div>

        {/* Circular Clock */}
        <div className="clock-container">
          <div className="clock-face">
            {isHourSelection
              ? hoursArray.map((value, i) => {
                  const angle = (i * (360 / 12)) - 90; // 12 positions
                  const x = Math.cos((angle * Math.PI) / 180) * 100;
                  const y = Math.sin((angle * Math.PI) / 180) * 100;
                  const style = {
                    position: "absolute",
                    left: `calc(50% + ${x}px - 20px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                  };
                  return (
                    <button
                      key={value}
                      className={
                        hour === value ? "clock-number active" : "clock-number"
                      }
                      onClick={() => handleClockClick(value)}
                      style={style}
                    >
                      {value}
                    </button>
                  );
                })
              : // Minute selection: show only every 5th minute
                Array.from({ length: 60 }, (_, i) => {
                  if (i % 5 !== 0) return null;
                  const angle = (i * (360 / 60)) - 90;
                  const x = Math.cos((angle * Math.PI) / 180) * 100;
                  const y = Math.sin((angle * Math.PI) / 180) * 100;
                  const style = {
                    position: "absolute",
                    left: `calc(50% + ${x}px - 20px)`,
                    top: `calc(50% + ${y}px - 20px)`,
                  };
                  return (
                    <button
                      key={i}
                      className={
                        minute === i ? "clock-number active" : "clock-number"
                      }
                      onClick={() => handleClockClick(i)}
                      style={style}
                    >
                      {i}
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
          {isHourSelection
            ? "Switch to Minute Selection"
            : "Switch to Hour Selection"}
        </button>

        {/* Action Buttons */}
        <div style={{ marginTop: "20px" }}>
        {/* Previous Button (Step1) */}
        <button
          onClick={handleBack}
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
          onClick={handleNext}
          style={{
            padding: "10px 20px",
            backgroundColor: hour !== null ? "#003366" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "100px",
            cursor: hour !== null ? "pointer" : "not-allowed",
            fontSize: "14px",
          }}
          disabled={hour === null}
        >
          <FaLongArrowAltRight />
        </button>
      </div>
      </div>
    </>
  );
};

export default TimePicker;

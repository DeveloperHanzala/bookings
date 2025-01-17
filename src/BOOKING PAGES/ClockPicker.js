import React, { useState } from "react";
import "./ClockPicker.css"; // Import the CSS file for styling

const ClockPicker = ({ onTimeChange }) => {
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);
  const [hourAngle, setHourAngle] = useState(0);
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [isHourSelected, setIsHourSelected] = useState(false);

  const handleHourClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = e.clientX - rect.left - centerX;
    const offsetY = e.clientY - rect.top - centerY;

    const angle = Math.atan2(offsetY, offsetX); // Calculate angle
    const hour = Math.round((angle / (2 * Math.PI)) * 12); // Convert angle to hour
    const adjustedHour = hour === 0 ? 12 : hour; // Adjust for hour 0 to 12

    setSelectedHour(adjustedHour); // Set selected hour
    setHourAngle((adjustedHour / 12) * 360); // Set the hour hand angle
    setIsHourSelected(true); // Mark hour as selected
  };

  const handleMinuteClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = e.clientX - rect.left - centerX;
    const offsetY = e.clientY - rect.top - centerY;

    const angle = Math.atan2(offsetY, offsetX); // Calculate angle
    const minute = Math.round(((angle + Math.PI / 2) / Math.PI) * 30); // Convert angle to minute
    const adjustedMinute = minute === 60 ? 0 : minute;

    setSelectedMinute(adjustedMinute); // Set selected minute
    setMinuteAngle((adjustedMinute / 60) * 360); // Set the minute hand angle

    if (selectedHour !== null) {
      const formattedTime = `${selectedHour}:${adjustedMinute < 10 ? `0${adjustedMinute}` : adjustedMinute}`;
      onTimeChange(formattedTime); // Send time back to parent
    }
  };

  return (
    <div className="clock-container">
      <div
        className="clock-face"
        onClick={isHourSelected ? handleMinuteClick : handleHourClick}
      >
        {/* Create the hour markers */}
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index * 30) * (Math.PI / 180); // Calculate angle for each hour
          const x = Math.cos(angle) * 45 + 50; // Position of the marker
          const y = Math.sin(angle) * 45 + 50;

          return (
            <div
              key={index}
              className="hour-marker"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              {index === 0 ? 12 : index}
            </div>
          );
        })}

        <div className="clock-center"></div>

        {/* Hour Hand - Hidden once hour is selected */}
        {!isHourSelected && (
          <div
            className="clock-hand hour-hand"
            style={{
              transform: `rotate(${hourAngle}deg)`,
            }}
          ></div>
        )}

        {/* Minute Hand */}
        {isHourSelected && (
          <div
            className="clock-hand minute-hand"
            style={{
              transform: `rotate(${minuteAngle}deg)`,
            }}
          ></div>
        )}
      </div>

      <div className="time-display">
        {selectedHour !== null && !selectedMinute
          ? `Selected Hour: ${selectedHour}`
          : selectedMinute !== null
          ? `Selected Time: ${selectedHour}:${selectedMinute < 10 ? `0${selectedMinute}` : selectedMinute}`
          : "Select Hour"}
      </div>
    </div>
  );
};

export default ClockPicker;

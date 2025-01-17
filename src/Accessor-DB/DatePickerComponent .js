import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import './Accessor.css'
import { Link } from "react-router-dom";


const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [day, setDay] = useState(selectedDate ? selectedDate.getDate() : "DAY");
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (newMonth) => {
    setMonth(newMonth);
    setSelectedDate(new Date(year, newMonth, selectedDate ? selectedDate.getDate() : 1));
    setOpenDropdown(null); // Close all dropdowns
  };

  const handleYearChange = (newYear) => {
    setYear(newYear);
    setSelectedDate(new Date(newYear, month, selectedDate ? selectedDate.getDate() : 1));
    setOpenDropdown(null); // Close all dropdowns
  };

  const handleDayChange = (newDay) => {
    setDay(newDay);
    setSelectedDate(new Date(year, month, newDay));
    setOpenDropdown(null); // Close all dropdowns
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown); // Toggle dropdown open/close
  };

  const nextStep = () => {
    if (selectedDate) {
      // Implement your logic to go to the next step
      console.log("Next step triggered with date:", selectedDate);
    }
  };

  const prevStep = () => {
    // Implement your logic to go to the previous step
    console.log("Previous step triggered");
  };

  return (
    <>
    <div>
      <div className="container-fluid step1bg">
        <div>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="step1font text-light">Your Preferred Date</h1>
              <p className="step1para text-light">
                Not sure yet? Just select 'I'm <span className="text-warning">Flexible</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5" style={{ textAlign: "center", marginTop: "50px" }}>
        <div className="date-picker-wrapper" style={{ display: "inline-block", marginTop: "20px" }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()} // Disable previous dates
            placeholderText="Click to select a date"
            dateFormat="yyyy-MM-dd" // Display format
            inline // Shows a full inline calendar
            className="custom-datepicker"
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 0,
                  display: "flex",
                  background: "#1976d2",
                  padding: "10px",
                  borderRadius: "10px",
                  justifyContent: "space-between", // Align items to the center
                }}
              >
                {/* Left Side: Selected Date */}
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      fontSize: "30px",
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                  >
                    {"<"}
                  </button>
                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      fontSize: "30px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    {">"}
                  </button>
                  <div
                    className="custom-date-show"
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                      fontSize: "20px",
                    }}
                  >
                    <FaRegCalendarAlt className="mx-0 mx-md-2 " />
                    {selectedDate
                      ? `${selectedDate.toDateString()}`
                      : date.toLocaleString("default", { month: "long", year: "numeric" })}
                  </div>
                </div>

                {/* Right Side: Day, Month, Year */}
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                  {/* Day */}
                  <div
                    onClick={() => toggleDropdown("day")}
                    className="custom-date-show1"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: "15px",
                      cursor: "pointer",
                    }}
                  >
                    {selectedDate ? selectedDate.getDate() : "DAY"}
                  </div>
                  {openDropdown === "day" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "40px", // Adjust to position under the header
                        right: "13%",
                        zIndex: 2,
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        padding: "5px",
                        maxHeight: "200px", // Set a max height to enable scrolling
                        overflowY: "auto", // Enable vertical scrolling
                      }}
                    >
                      {[...Array(31)].map((_, index) => (
                        <div
                          key={index}
                          onClick={() => handleDayChange(index + 1)}
                          style={{
                            padding: "5px",
                            cursor: "pointer",
                          }}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Month */}
                  <div
                    onClick={() => toggleDropdown("month")}
                    className="custom-date-show1"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: "15px",
                      cursor: "pointer",
                    }}
                  >
                    {selectedDate
                      ? new Date(selectedDate).toLocaleString("default", { month: "long" })
                      : "MONTH"}
                  </div>
                  {openDropdown === "month" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "40px", // Adjust to position under the header
                        zIndex: 2,
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        padding: "5px",
                      }}
                    >
                      {[...Array(12)].map((_, index) => (
                        <div
                          key={index}
                          onClick={() => handleMonthChange(index)}
                          style={{
                            padding: "5px",
                            cursor: "pointer",
                          }}
                        >
                          {new Date(0, index).toLocaleString("default", { month: "long" })}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Year */}
                  <div
                    className="custom-date-show1"
                    onClick={() => toggleDropdown("year")}
                    style={{
                      color: "white",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  >
                    {selectedDate ? selectedDate.getFullYear() : "YEAR"}
                  </div>
                  {openDropdown === "year" && (
                    <div
                      style={{
                        position: "absolute",
                        top: "40px", // Adjust to position under the header
                        zIndex: 2,
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                        padding: "5px",
                        maxHeight: "200px", // Set max height for scroll
                        overflowY: "auto", // Enable scrolling
                      }}
                    >
                      {[...Array(11)].map((_, index) => (
                        <div
                          key={index}
                          onClick={() => handleYearChange(year + index)}
                          style={{
                            padding: "5px",
                            cursor: "pointer",
                          }}
                        >
                          {year + index}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          />
        </div>

        {/* Buttons to navigate steps */}
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={prevStep}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#003366",
              color: "#fff",
              border: "none",
              display:"none",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaLongArrowAltLeft />
          </button>
          <Link to={'/accessor/quote'}>
          <button
            onClick={nextStep}
            style={{
              padding: "10px 20px",
              backgroundColor: selectedDate ? "#003366" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              cursor: selectedDate ? "pointer" : "not-allowed",
              fontSize: "14px",
            }}
            disabled={!selectedDate}
          >
            <FaLongArrowAltRight />
          </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default DatePickerComponent;

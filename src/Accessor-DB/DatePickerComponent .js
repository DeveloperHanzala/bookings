import React, { useState } from "react";
import { useParams, useLocation, Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaLongArrowAltRight, FaLongArrowAltLeft, FaRegCalendarAlt } from "react-icons/fa";
import './Accessor.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [day, setDay] = useState(selectedDate ? selectedDate.getDate() : "DAY");
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const jobData = location.state?.jobData;

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      // Format date as dd/mm/yyyy
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      setFormattedDate(`${day}/${month}/${year}`);

      // Format time as 12-hour with am/pm
      const hours = date.getHours();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const twelveHour = hours % 12 || 12; // Convert 0 to 12
      setFormattedTime(`${twelveHour}${ampm}`);
    }
  };

  const handleMonthChange = (newMonth) => {
    setMonth(newMonth);
    setSelectedDate(new Date(year, newMonth, selectedDate ? selectedDate.getDate() : 1));
    setOpenDropdown(null);
  };

  const handleYearChange = (newYear) => {
    setYear(newYear);
    setSelectedDate(new Date(newYear, month, selectedDate ? selectedDate.getDate() : 1));
    setOpenDropdown(null);
  };

  const handleDayChange = (newDay) => {
    setDay(newDay);
    setSelectedDate(new Date(year, month, newDay));
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <div className="container-fluid step1bg">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="step1font text-light">Your Preferred Date</h1>
            <p className="step1para text-light">
              Not sure yet? Just select 'I'm <span className="text-warning">Flexible</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5" style={{ textAlign: "center", marginTop: "50px" }}>
        <div className="date-picker-wrapper" style={{ display: "inline-block", marginTop: "20px" }}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            placeholderText="Click to select a date"
            dateFormat="yyyy-MM-dd"
            inline
            className="custom-datepicker"
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div style={{
                margin: 0,
                display: "flex",
                background: "#1976d2",
                padding: "10px",
                borderRadius: "10px",
                justifyContent: "space-between",
              }}>
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

                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
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
                    <div style={{
                      position: "absolute",
                      top: "40px",
                      right: "13%",
                      zIndex: 2,
                      marginTop: "10px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                      padding: "5px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}>
                      {[...Array(31)].map((_, index) => (
                        <div
                          key={index}
                          onClick={() => handleDayChange(index + 1)}
                          style={{ padding: "5px", cursor: "pointer" }}
                        >
                          {index + 1}
                        </div>
                      ))}
                    </div>
                  )}

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
                    <div style={{
                      position: "absolute",
                      top: "40px",
                      zIndex: 2,
                      marginTop: "10px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                      padding: "5px",
                    }}>
                      {[...Array(12)].map((_, index) => (
                        <div
                          key={index}
                          onClick={() => handleMonthChange(index)}
                          style={{ padding: "5px", cursor: "pointer" }}
                        >
                          {new Date(0, index).toLocaleString("default", { month: "long" })}
                        </div>
                      ))}
                    </div>
                  )}

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
                    <div style={{
                      position: "absolute",
                      top: "40px",
                      zIndex: 2,
                      marginTop: "10px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                      padding: "5px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}>
                      {[...Array(11)].map((_, index) => (
                        <div
                          key={index}
                          onClick={() => handleYearChange(year + index)}
                          style={{ padding: "5px", cursor: "pointer" }}
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

        <div style={{ marginTop: "20px" }}>
          <Link to={`/accessor/quote/${jobData.id}`} 
            state={{ 
              jobData: jobData, 
              formattedDate: formattedDate,
              formattedTime: formattedTime 
            }}>
            <button
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
  );
};

export default DatePickerComponent;
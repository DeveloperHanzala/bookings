import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Summaryss = ({ formData, prevStep, handleChange, submitForm }) => {
  const [formValues, setFormValues] = useState({
    name: formData.name || "",
    email: formData.email || "",
    mobile: "",
    countryCode: "+1", // Default country code (for example, +1 for US)
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleMobileChange = (e) => {
    handleChange('mobile')(e.target.value);
  };

  const handleCountryCode = (e) => {
    handleChange('countryCode')(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
  
    <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
      <div className=" p-4" >
       
        <form onSubmit={(e) => { e.preventDefault(); submitForm(); }}>
        <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}> Thank You for Submitting! </h1>
        <p style={styles.message} className="mt-5"></p>
         {/* Submit button */}
         <button type="submit" className="btn summary-button w-100 mb-3">
         Back To Dashboard
          </button>
      </div>
    </div>
         
        </form>

       
      </div>
    </div>
    </>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "400px",
    animation: "fadeIn 4s ease-in-out",
  },
  title: {
    color: "#003366",
    fontSize: "2rem",
  },
  message: {
    color: "#555",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#003366",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
export default Summaryss;

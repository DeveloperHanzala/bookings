import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";
import Summary from "./Summary";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [quoteId, setQuoteId] = useState(null);
  const navigate = useNavigate();
  const [assessmentId, setAssessmentId] = useState(null);
  const [formData, setFormData] = useState({
    building_type: null,
    preferred_date: "",
    preferred_time: "",
    property_type: "",
    property_size: "",
    bedrooms: "",
    additional_features: null,
    heat_pump_installed: "",
    county: "",
    nearest_town: "",
    ber_purpose: "",
    name: "",
    email_address: "",
    mobile_number: "",
    countryCode: "+353",
    mobile: ""
  });

  useEffect(() => {
    const fetchQuoteId = async () => {
      try {
        const response = await fetch('https://booking.homecert.ie/api/get-quote/');
        const data = await response.json();
        setQuoteId(data.quote.id); // Get ID from quote object
        setAssessmentId(data.assessment_id);
      } catch (error) {
        console.error('Error fetching quote ID:', error);
      }
    };
    fetchQuoteId();
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: value === "" ? null : value 
    }));
  };

  const submitForm = async () => {
    if (!quoteId) {
      console.error("Error: quoteId is null. Fetch quoteId first.");
      return;
    }
  
    // Convert null values to empty strings and format mobile_number
    const payload = {
      ...formData,
      building_type: formData.building_type || "",
      additional_features: formData.additional_features || "",
      mobile_number: `${formData.countryCode}${formData.mobile}`,
      preferred_date: formData.preferred_date || "",
      preferred_time: formData.preferred_time || "",
      property_type: formData.building_type || "",
    };
  
    // Remove unnecessary fields
    delete payload.countryCode;
    delete payload.mobile;
  
    console.log("Final Payload:", JSON.stringify(payload, null, 2));
  
    try {
      const response = await fetch(`https://booking.homecert.ie/api/get-quote/${quoteId}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload) // Send flat structure without "quote" wrapper
      });
  
      const responseData = await response.json();
      console.log("Response:", responseData);
      
      if (response.ok) {
        navigate('/thank-you');
      } else {
        console.error("API Error:", responseData);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
  

  switch (step) {
    case 1: return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2: return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3: return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 4: return <Step4 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 5: return <Step5 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 6: return <Step6 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 7: return <Step7 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 8: return <Step8 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 9: return <Step9 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 10: return <Step10 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 11: return <Summary formData={formData} prevStep={prevStep} handleChange={handleChange} submitForm={submitForm} />;
    default: return null;
  }
};

export default Booking;
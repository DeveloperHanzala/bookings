import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import Step1 from "./Stepss1";
import Step2 from "./Stepss2";
import Step3 from "./Stepss3";
import Step4 from "./Stepss4";
import Step5 from "./Stepss5";
import Step6 from "./Stepss6";
import Step7 from "./Stepss7";
import Step8 from "./Stepss8";
import Step9 from "./Stepss9";
import Step10 from "./Stepss10";
import Summary from "./Summaryss";

const ClientCerti = () => {
   const { jobId } = useParams();
    const navigate = useNavigate();
  const [step, setStep] = useState(1);
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
  // Proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle form field changes
  const handleChange = (field) => (value) => {
    setFormData(prev => ({ 
      ...prev, 
      [field]: value === "" ? null : value 
    }));
  };

  const submitForm = async () => {
    const payload = {
      ...formData,
      building_type: formData.building_type || "",
      additional_features: formData.additional_features || "",
      mobile_number: `${formData.countryCode}${formData.mobile}`,
      preferred_date: formData.preferred_date || "",
      preferred_time: formData.preferred_time || "",
      property_type: formData.building_type || "",
    };
    delete payload.countryCode;
    delete payload.mobile;
    console.log("Final Payload:", JSON.stringify(payload, null, 2));
    const token = localStorage.getItem("access_token");
    try {
      const response = await fetch(`https://testing.techionik.com/api/job/${jobId}/update/`, {
        method: 'PUT',
        headers: { 
          Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        navigate('/client/ber-certificate'); 
       
      }
   
    } catch (error) {
      console.error('Submission error:', error);
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

export default ClientCerti;

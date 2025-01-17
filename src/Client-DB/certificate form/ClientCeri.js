import React, { useState } from "react";
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
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    time: "",
    ampm: "AM",
    // Add other fields for new steps if needed
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
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e });
  };

  // Render the correct step based on `step`
  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 4:
      return <Step4 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 5:
      return <Step5 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 6:
      return <Step6 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 7:
      return <Step7 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 8:
      return <Step8 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 9:
      return <Step9 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 10:
      return <Step10 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 11:
      return <Summary formData={formData} prevStep={prevStep} />;
    default:
      return null;
  }
};

export default ClientCerti;

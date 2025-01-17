import React, { useState } from "react";
import './Assessments.css'
import HouseTypes from "./Second/HouseTypes";
import Age from "./Second/Age";
import TypeofRating from "./Second/TypeofRating";
import WallConstruction from "./Second/WallConstruction";
import Roof from "./Second/Roof";
import Ground from "./Second/Ground";
import FloorArea from "./Second/FloorArea";
import Opening from "./Second/Step2/Opening";
import Roomdata from "./Second/Step2/Roomdata";
import Ventilation from "./Second/Step2/Ventilation";
import LightingSummary from "./Second/Step2/LightingSummary";
import PrimaryS from "./Second/Step3/PrimaryS";
import SecondaryS from "./Second/Step3/SecondaryS";
import PrimaryF from "./Second/Step3/PrimaryF";
import SecondaryF from "./Second/Step3/SecondaryF";
import GOLBoiler from "./Second/Step3/GOLBoiler";
import SFboiler from "./Second/Step3/SFboiler";
import Comments from "./Second/Step3/Comments";
import HeatPumps from "./Second/Step3/HeatPumps";
import ElectricRoom from "./Second/Step3/ElectricRoom";
import CHP from "./Second/Step3/CHP";
import PrimaryHWS from "./Second/Step 4/PrimaryHWS";
import SolarHWS from "./Second/Step 4/SolarHWS";
import ShowersBath from "./Second/Step 4/ShowersBath";
import Commentsstep4 from "./Second/Step 4/Commentsstep4";
import Heatingcontrols from "./Second/Step 5/Heatingcontrols";
import UFH from "./Second/Step 5/UFH";
import DLS from "./Second/Step 6/DLS";
import HeatingS1 from "./Second/Step 6/HeatingS1";
import CommentsStep5 from "./Second/Step 6/CommentsStep5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import img from '../Images/download.jpeg';
import submit from '../Images/Submit.png';
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 8));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => {
    console.log("Form submitted");
    // Add your submission logic here
  };
  

  return (
    <div className="dashboard bg-light">
           <div className="container">
                <div className="row">
                <div className="col-md-12 text-end">
                <img src={img} alt="" className="img-fluid dashimg mx-2" />
                <IoIosArrowDown size={20} className="mx-2" />
                <span className="notibg mx-2 text-center">
                      <IoMdNotifications className="" color="black" size={20} />
                </span>
              
            </div>

            <div className="col-md-12 text-start">
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Assessments</span>     </p>  
            </div>

            
            <div className="col-md-12 no-overflow-x text-start d-flex align-items-center justify-content-between flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p> 
        <div className="fs-3 mx-2 fw-bold mb-0">Assessments</div>  
    </div>
   
    <div className="">
    <button
  className="btn-prev"
  disabled={currentStep === 1} // Disable button if it's the first step
  onClick={prevStep} // Call the `prevStep` function
>
Close now
</button>

    </div>
    
</div>
                </div>
            </div> 



      <div className="multi-step-form mt-5">
        {/* Progress Bar */}
        <div className="progress-bar">
  {[...Array(8).keys()].map((step) => (
    <React.Fragment key={step}>
      <div
        className={`step ${currentStep >= step + 1 ? "active" : ""}`}
      >
        <div className="circle">{step + 1}</div>
      </div>
      {step < 7 && (
        <div
          className={`line ${
            currentStep > step + 1 ? "active" : ""
          }`}
        ></div>
      )}
    </React.Fragment>
  ))}
</div>

        {/* Form Content */}
        <div className="form-content">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {currentStep === 5 && <Step5 />}
          {currentStep === 6 && <Step6 />}
          {currentStep === 7 && <Step7 />}
          {currentStep === 8 && <Step8 />}
        </div>

        {/* Navigation Buttons */}
        <div className="form-navigation">
        
        <button
  className="btn-next"
  onClick={currentStep === 8 ? handleSubmit : nextStep}
>
  {currentStep === 8 ? "Submit" : "Next"}
</button>

        </div>
      </div>
    </div>
  );
};

const Step1 = () => (
  <div>
   
    <div className="row" >
        <div className="col-md-6">
    <label className="fw-bold">
      Assessor Name / BER reg. no. *
     
    </label>
    <input type="text" required />
        </div>
        <div className="col-md-6">
    <label className="fw-bold">
    Survey Date *
   </label>
    <input type="date" required />
        </div>
        <div className="col-md-4 mt-4">
    <label className="fw-bold">
    Number of storeys *
   </label>
    <input type="text" required />
        </div>
        <div className="col-md-4  mt-4">
    <label className="fw-bold">
    Number of bedrooms *
   </label>
    <input type="text" required />
        </div>
        <div className="col-md-4  mt-4">
    <label className="fw-bold">
    Number of Eircode extensions *
   </label>
    <input type="text" required />
        </div>
        <div className="col-md-12  mt-4">
    <label className="fw-bold">
    Property Address *
   </label>
    <input type="text" required />
        </div>
        <div className="col-md-6  mt-4">
    <label className="fw-bold">
    Eircode *
   </label>
    <input type="text" required />
        </div>
        <div className="col-md-6  mt-4">
    <label className="fw-bold">
    MPRN *
   </label>
    <input type="text" required />
        </div>


    </div>

    <div className="contaier mt-5">
        <div className="row">
            <div className="col-md-3 ">
                <h6 className="fw-bold">Dwelling Type *</h6>
                <div className="rounded">
                
                    <HouseTypes/>
                </div>
            </div>
            <div className="col-md-2 ">
                <h6 className="fw-bold">Age: Dwelling *</h6>
                <div className="rounded">
                
                    <Age />
                </div>
            </div>
            <div className="col-md-2 ">
                <h6 className="fw-bold">Age: Extension 1 *</h6>
                <div className="rounded">
                
                    <Age />
                </div>
            </div>
            <div className="col-md-2 ">
                <h6 className="fw-bold">Age: Extension 2 *</h6>
                <div className="rounded ">
                
                    <Age />
                </div>
            </div>
            <div className="col-md-3 ">
                <h6 className="fw-bold">Type of Rating *</h6>
                <div className="rounded">
                
                    <TypeofRating />
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Main Wall *</h6>
                <div className="rounded">
                
                    <WallConstruction />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold"> Roof Construction: Main Dwelling*</h6>
                <div className="rounded">
                
                    <Roof />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Main Dwelling*</h6>
                <div className="rounded">
                
                    <Ground />
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Wall Type 2*</h6>
                <div className="rounded">
                
                    <WallConstruction />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold">Roof Construction: Roof Type 2*</h6>
                <div className="rounded">
                
                    <Roof />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Floor Type 2*</h6>
                <div className="rounded">
                
                    <Ground />
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Wall Type 3*</h6>
                <div className="rounded">
                
                    <WallConstruction />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold">Roof Construction: Roof Type 3*</h6>
                <div className="rounded">
                
                    <Roof />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Floor Type 3*</h6>
                <div className="rounded">
                
                    <Ground />
                </div>
            </div>
        </div>


        <div className="row mt-5">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Wall Type 4*</h6>
                <div className="rounded">
                
                    <WallConstruction />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold">Roof Construction: Roof Type 4*</h6>
                <div className="rounded">
                
                    <Roof />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Floor Type 4*</h6>
                <div className="rounded">
                
                    <Ground />
                </div>
            </div>
        </div>

        <div>
            <div className="col-md-12">
               <FloorArea/>
            </div>
        </div>
     







    </div>

    


  </div>
);

const Step2 = () => <div>


    <div className="container">
        <div className="row">
                <div className="col-md-12">
                    <Opening/>
                </div>
                <div className="col-md-12">
                    <Roomdata/>
                </div>
                <div className="col-md-12">
                    <Ventilation/>
                </div>
                <div className="col-md-12">
                    <LightingSummary/>
                </div>
        </div>
    </div> 
   </div>;




const Step3 = () => <div>
    <div className="container">
         <div>
             <div className="row">
                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold"> Primary Heating System *</h6>
                     <PrimaryS/>
                 </div>

                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold">Secondary Heating System *</h6>
                     <SecondaryS/>
                 </div>
                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold">Primary Heating Fuel*</h6>
                     <PrimaryF/>
                 </div>
                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold">Secondary Heating Fuel*</h6>
                     <SecondaryF/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Gas / Oil / LPG Boilers *</h6>
                     <GOLBoiler/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Solid Fuel Boilers *</h6>
                     <SFboiler/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Comments on heating system *</h6>
                     <Comments/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold"> Heat Pumps *</h6>
                     <HeatPumps/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Electric Room Heaters *</h6>
                     <ElectricRoom/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Individual CHP? *</h6>
                     <CHP/>
                 </div> 

             </div>
         
         </div>
    </div>


</div>;






const Step4 = () => <div>
      <div className="container">
         <div>
             <div className="row">
                 <div className="col-md-6 mt-3">
                 <h6 className="fw-bold"> Primary Hot Water System *</h6>
                     <PrimaryHWS/>
                 </div>
                 <div className="col-md-6 mt-3">
                 <h6 className="fw-bold"> Solar Water Heating System *</h6>
                     <SolarHWS/>
                 </div>
                 <div className="col-md-8 mt-3">
              
                     <ShowersBath/>
                 </div>
                 <div className="col-md-4 mt-3">
              
                 <Commentsstep4/>
          </div>
             </div>
         
         </div>
    </div>


</div>;






const Step5 = () => <div>
    <div className="row">
      <div className="col-md-4 mt-3">
      <h6 className="fw-bold"> Heating Controls (tick all that apply) *</h6>
              <Heatingcontrols/>
       </div>
       <div className="col-md-8 mt-3">
      
              <UFH/>
       </div>
    </div>


</div>;






const Step6 = () => <div>
     <div className="row">
      <div className="col-md-4 mt-3">
      <h6 className="fw-bold"> Distribution Loss Factor and charge method *</h6>
              <DLS/>
       </div>
       <div className="col-md-8 mt-3">
      
              <HeatingS1/>
       </div>
    </div>
    <div className="col-md-12 mt-3">
      
      <CommentsStep5/>
</div>


</div>;










const Step7 = () => <div className="p-5">
    
    <div className="container text-center d-flex flex-column align-items-center justify-content-center p-5">
  <h2 className="fw-bold coloa">Only Lidar Scanner File Upload</h2>
  <div className="col-md-12 text-center">
    <label htmlFor="file-upload" className="buttonass">
      Upload File
    </label>
  </div>
  <input id="file-upload" type="file" className="none" />
</div>

</div>;





const Step8 = () =>  <div>
    
<div className="container text-center d-flex flex-column align-items-center justify-content-center p-2">
    <div className="col-md-12 ">
<img src={submit} className="submitimg" alt="" />
<h3 className="coloa mt-2 fw-bold">Submit your Assessment Request</h3>
<p>Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a assessment request in 24 - 48 hours.</p>
    </div>
</div>

</div>;

export default MultiStepForm;

import React, { useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
const AssessorRegistration = () => {
    const currentYear = new Date().getFullYear();

    // Create an array of years starting from the current year
    const years = [];
    for (let i = currentYear; i <= currentYear + 100; i++) {
      years.push(i);
    }

    const location = useLocation();

    useEffect(() => {
      // Check if a hash exists in the URL
      if (location.hash) {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the element
        }
      }
    }, [location]);
  return (
    <>
    <div className='conatiner-fluid accessbg' id='assessor'>
        <div className='text-center'>
            <h1 className='accesshead'>Assessor Registration</h1>
            <p><Link to={"/"} className='decnone'> Home <IoIosArrowForward /></Link>  <span className='text-warning'> Assessor Registration</span></p>
        </div>
    </div>

    <div className='container  p-md-0 mt-5 mb-5'>
        <div className='text-center'> 
    <h1 className='accesshead1'>Sign up to get more BER jobs in your Area</h1>
        </div>
        <form className='container px-5 mt-4'>
        <div className='row'>
            <div className='col-md-6'>
            <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-4 fw-bold col-form-label">First Name </label>
            <div className="col-sm-8">
              <input
                type="text"
                id="name"
                name="name"
               
                className="form-control"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4  fw-bold col-form-label">Email Address</label>
            <div className="col-sm-8">
              <input
                type="email"
                id="email"
                name="email"
         
                className="form-control"
                required
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="mb-3 row">
            <label htmlFor="mobile" className="col-sm-4 fw-bold col-form-label">Mobile Phone</label>
            <div className="col-sm-8 d-flex">
              {/* Phone Number Input */}
              <input
                type="text"
                id="mobile"
                name="mobile"
                className="form-control"
               
                required
              />
            </div>
          </div>
          {/* SEAI Registration */}
           <div className="mb-3 row">
            <label htmlFor="sai" className="col-sm-4 fw-bold col-form-label">SEAI Registration #</label>
            <div className="col-sm-8 d-flex">
              {/* Phone Number Input */}
              <input
                type="text"
                id="sai"
                name="mobile"
                className="form-control"
               
                required
              />
            </div>
          </div>
 {/* Professional insurance 
policy holder */}
          <div className="mb-3 row">
            <label htmlFor="prof" className="col-sm-6 fw-bold col-form-label">Professional insurance 
            policy holder</label>
            <div className="col-sm-6 d-flex">
            <select id='prof' className='form-control'>
                <option>
                    No
                </option>
                <option>
                   Yes
                </option>
             </select>
            </div>
          </div>



            </div>
            <div className='col-md-6'>
            <div className="mb-3 row">
            <label htmlFor="lname" className="col-sm-4 fw-bold col-form-label">Last Name </label>
            <div className="col-sm-8">
              <input
                type="text"
                id="lname"
                name="name"
               
                className="form-control"
                required
              />
            </div>
          </div>

    
          <div className="mb-3 row">
            <label htmlFor="pass" className="col-sm-4  fw-bold col-form-label">Password</label>
            <div className="col-sm-8">
              <input
                type="email"
                id="pass"
                name="email"
         
                className="form-control"
                required
              />
            </div>
          </div>


            <div className="mb-3 row">
            <label htmlFor="home" className="col-sm-4 fw-bold col-form-label">Home Country</label>
            <div className="col-sm-8 d-flex">
            <select id='home' className='form-control'>
            <option>
            Carlow
                </option>
                <option>
                   Yes
                </option>
             </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="assessorYear" className="col-sm-4 fw-bold col-form-label">
              SEAI Assessor since
            </label>
            <div className="col-sm-8">
              <select
                id="assessorYear"
                name="assessorYear"
               
                className="form-control"
                required
              >
                <option value="" disabled>Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
            <div className="mb-3 row">
            <label htmlFor="vat" className="col-sm-4 fw-bold col-form-label">VAT Registered</label>
            <div className="col-sm-8 d-flex">
            <select id='vat' className='form-control'>
                <option>
                    No
                </option>
                <option>
                   Yes
                </option>
             </select>
            </div>
          </div>
            </div>
            <div className="mb-3 row">
            <label htmlFor="d-c" className="col-sm-4 fw-bold col-form-label">Domestic or Commercial</label>
            <div className="col-sm-8 d-flex">
             <select id='d-c' className='form-control w-100'>
                <option>
                    Domestic Accessor
                </option>
                <option>
                    Commercial Accessor
                </option>
             </select>
            </div>
          </div>
        </div>

        </form>
    </div>

<div className='container mt-5 mb-5'>
    <div className='text-center pb-4'>
              <h1 className='accesshead1'>Select the counties you would like to receive jobs in:</h1>  
    </div>
    <div className='row no-overflow-x'>
          <div className='col-md-2 col-6'>
                <div className='d-flex  align-items-center flex-column justify-content-center'>
                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co1"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co1">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co2"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co2">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co3"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co3">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co4"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co4">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co5"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co5">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co6"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co6">
                Co. Carlow
                </label>
  

                </div>
                  </div>
            </div> 

             <div className='col-md-2  col-6'>
             <div className='d-flex  align-items-center flex-column justify-content-center'>
                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co1"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co1">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co2"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co2">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co3"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co3">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co4"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co4">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co5"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co5">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co6"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co6">
                Co. Carlow
                </label>
  

                </div>
                  </div>
            </div>     

             <div className='col-md-2  col-6'>
             <div className='d-flex  align-items-center flex-column justify-content-center'>
                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co1"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co1">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co2"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co2">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co3"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co3">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co4"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co4">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co5"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co5">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co6"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co6">
                Co. Carlow
                </label>
  

                </div>
                  </div>
            </div>   

             <div className='col-md-2  col-6'>
             <div className='d-flex  align-items-center flex-column justify-content-center'>
                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co1"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co1">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co2"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co2">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co3"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co3">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co4"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co4">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co5"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co5">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co6"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co6">
                Co. Carlow
                </label>
  

                </div>
                  </div>
            </div> 

             <div className='col-md-2  col-6'>
             <div className='d-flex  align-items-center flex-column justify-content-center'>
                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co1"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co1">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co2"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co2">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co3"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co3">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co4"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co4">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co5"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co5">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co6"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co6">
                Co. Carlow
                </label>
  

                </div>
                  </div>
            </div>     

             <div className='col-md-2  col-6'>
             <div className='d-flex  align-items-center flex-column justify-content-center'>
                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co1"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co1">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co2"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co2">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co3"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co3">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co4"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co4">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co5"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co5">
                Co. Carlow
                </label>
  

                </div>

                <div className='pb-4 d-flex inp-col'>
                <input
              type="checkbox"
              id="co6"
              name="agreeToTerms"
              className="form-check-input p-2 shadow-sm"
              required
            />
        
                <label className="form-check-label mx-2" htmlFor="co6">
                Co. Carlow
                </label>
  

                </div>
                  </div>
            </div>          
    </div>
</div>



    </>
  )
}

export default AssessorRegistration

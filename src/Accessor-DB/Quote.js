import React, { useEffect, useState } from 'react';
import { useParams, useLocation,useNavigate } from 'react-router-dom';

const Quote = () => {
    const { jobId } = useParams();
      const location = useLocation();
      const navigate = useNavigate();
    const jobData = location.state?.jobData; 
    const selectedDate = location.state?.selectedDate; 
    console.log("the job data is" + selectedDate)
     useEffect(() => {
       window.scrollTo({ top: 0, behavior: "smooth" });
     }, []);
    const [formData, setFormData] = useState({
        amount: '',
        VAT_Registered: false,
        SEAI_Registered: false,
        insurance: true
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false); // New state for terms checkbox

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const token = localStorage.getItem("access_token");
        
        if (!agreeTerms) {
            setError('You must agree to the terms of use');
            setLoading(false);
            return;
        }

        try {
            const storedDate = localStorage.getItem(`jobDate_${jobId}`);
            const availability = storedDate ? new Date(storedDate).toDateString() : 'Available immediately';

            const payload = {
                amount: Number(formData.amount).toFixed(2).toString(),
                availability,
                VAT_Registered: formData.VAT_Registered,
                SEAI_Registered: formData.SEAI_Registered,
                insurance: formData.insurance
            };

            const response = await fetch(`https://backend.homecert.ie/api/jobs/${jobId}/bid/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Failed to submit quote');
            }
            navigate('/accessor/live-jobs'); 
            setSuccess(true);
            localStorage.removeItem(`jobDate_${jobId}`);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

  return (
    <>

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

        <div className='container'>
            <div className='row'>
            <div className='col-md-6'>
        <div className='p-5 '>
          <div className='shadow round text-center'>
            <div className=' bg-primary round text-light'>
              <h2 className='display-6 '>Job Details</h2>
            </div>
            
            <div className='d-flex p-4 justify-content-between'>
              <div><span>Location:</span></div>
              <div><span>{jobData?.nearest_town || 'N/A'}, Co. {jobData?.county || 'N/A'}</span></div>
            </div>

            {/* <div className='d-flex p-4 justify-content-between'>
              <div><span>Eircode:</span></div>
              <div><span>F93WE1C</span></div>
            </div> */}

            <div className='d-flex p-4 justify-content-between'>
              <div><span>Property Type:</span></div>
              <div><span>{jobData?.building_type || 'N/A'}</span></div>
            </div>

            <div className='d-flex p-4 justify-content-between'>
              <div><span>Size:</span></div>
              <div><span>{jobData?.property_size || 'N/A'}</span></div>
            </div>

            <div className='d-flex p-4 justify-content-between'>
              <div><span>Beds:</span></div>
              <div><span>{jobData?.bedrooms || 'N/A'}</span></div>
            </div>

            <div className='d-flex p-4 justify-content-between'>
              <div><span>Heat Pump:</span></div>
              <div><span>{jobData?.heat_pump_installed || 'N/A'}</span></div>
            </div>

            <div className='d-flex p-4 justify-content-between'>
              <div><span>Additions:</span></div>
              <div><span>{jobData?.additional_features || 'N/A'}</span></div>
            </div>

            <div className='d-flex p-4 justify-content-between'>
              <div><span>Purpose:</span></div>
              <div><span>{jobData?.ber_purpose ? 
                jobData.ber_purpose.charAt(0).toUpperCase() + jobData.ber_purpose.slice(1) 
                : 'N/A'}</span></div>
            </div>
          </div>
        </div>
      </div>
               
            <div className='col-md-6'>
                <div className='p-5 '>
                    <form onSubmit={handleSubmit}>
                        <div className='shadow round  text-center'>
                            <div className=' bg-primary round text-light'>
                                <h2 className='display-6 '>Your Quote</h2>
                            </div>
                            
                            <div className=' p-4 text-center'>
                                <div>
                                    <input 
                                        id='seai' 
                                        type='checkbox' 
                                        name="SEAI_Registered"
                                        checked={formData.SEAI_Registered}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="seai">SEAI registered.</label>
                                </div>
                            </div>
                            
                            <div className=' p-4 text-center'>
                                <div>
                                    <input 
                                        id='vat' 
                                        type='checkbox' 
                                        name="VAT_Registered"
                                        checked={formData.VAT_Registered}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="vat">VAT (if registered).</label>
                                </div>
                            </div>

                            <div className=' p-4 text-center'>
                                <div>
                                    <span>Include €30 Website fee.</span>
                                </div>
                            </div>

                            <div className=' p-3 text-center'>
                                <div>
                                    <div className='px-5'>
                                        <input 
                                            className='border text-center border-primary px-5 p-3' 
                                            placeholder='170'
                                            name="amount"
                                            type="text"
                                            value={formData.amount}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <p className='mt-3'>Eg. 170, no euro sign or cents.</p>
                                </div>
                            </div>

                            <div className=' pb-4 text-center'>
                                <div className='px-5'>
                                    <input 
                                        type='checkbox' 
                                        className='mx-2' 
                                        checked={agreeTerms}
                                        onChange={(e) => setAgreeTerms(e.target.checked)}
                                        required
                                    />
                                   <span>I agree to the <span className='text-danger'>terms of use</span> <br/> and I am available from  
     {""} {selectedDate ? new Date(selectedDate).toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' }) : 'N/A'}
</span>

                                
                                    </div>

                                <button
              type="submit"
              className='btn btn-primary px-5'
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Quote'}
            </button>
                                
                                
                            </div>
                            

                    </div>
                    </form>

                    </div>
                </div>
            </div>
        </div>



    </>
  )
}

export default Quote

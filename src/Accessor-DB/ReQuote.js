import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReQuote = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // State for job data (fetched via GET) and for form values.
  const [jobData, setJobData] = useState(null);
  const [formData, setFormData] = useState({
    SEAI_Registered: false,
    VAT_Registered: false,
    amount: ""
  });
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch the bid data on mount using the jobId from URL.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const token = localStorage.getItem("access_token");
    if (!token) return;

    axios.get(`https://backend.homecert.ie/api/bids/${jobId}/`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((response) => {
      const data = response.data;
      setJobData(data);
      // Populate formData from the fetched bid details.
      setFormData({
        SEAI_Registered: data.SEAI_Registered || false,
        VAT_Registered: data.VAT_Registered || false,
        amount: data.amount || ""
      });
      // If your API returns a selected date, store it (or else remove this).
      if (data.selectedDate) {
        setSelectedDate(data.selectedDate);
      }
    })
    .catch((error) => {
      console.error("Error fetching bid data:", error);
    });
  }, [jobId]);

  // Handle input changes for both checkboxes and text fields.
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission to update the bid via PUT.
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("access_token");
    axios.put(`https://backend.homecert.ie/api/bids/${jobId}/`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setLoading(false);
      // Optionally update state with the returned data.
      setJobData(response.data);
      setMessage("Quote updated successfully");
      // Navigate or update UI as needed.
      setTimeout(() => {
        navigate("/accessor/my-quotes");
      }, 2000);
    })
    .catch((error) => {
      setLoading(false);
      console.error("Error updating quote:", error);
      setError("Error updating quote, please try again.");
    });
  };

  return (
    <>
      <div className="container-fluid step1bg">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="step1font text-light">Re-Quote</h1>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-6'>
            <div className='p-5'>
              <form onSubmit={handleSubmit}>
                <div className='shadow round text-center'>
                  <div className='bg-primary round text-light'>
                    <h2 className='display-6'>Your Quote</h2>
                  </div>

                  <div className='p-4 text-center'>
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

                  <div className='p-4 text-center'>
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

                  <div className='p-4 text-center'>
                    <div>
                      <span>Include €30 Website fee.</span>
                    </div>
                  </div>

                  <div className='p-3 text-center'>
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

                  <div className='pb-4 text-center'>
                    <div className='px-5'>
                      <input
                        type='checkbox'
                        className='mx-2'
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        required
                      />
                      <span>
                        I agree to the <span className='text-danger'>terms of use</span> <br />
                        and I am available from {selectedDate ? new Date(selectedDate).toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' }) : 'N/A'}
                      </span>
                    </div>
                    {<div className='text-center px-5 mt-3'>
                        <p className='bg-primary rounded text-white'>{message}</p>
                        </div>}
                        {<div className='text-center px-5 mt-3'>
                        <p className='bg-danger rounded text-white'>{error}</p>
                        </div>}
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
  );
};

export default ReQuote;

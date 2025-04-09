import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const JobShow = () => {
  const { jobid } = useParams(); // Get jobid from URL
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const accessToken = localStorage.getItem("access_token"); // Check if access token exists

    console.log(job)

  useEffect(() => {
    if (!jobid) {
      setError("Job ID not found in URL.");
      setLoading(false);
      return;
    }

    const fetchJob = async () => {
      try {
        const response = await axios.get(`https://backend.homecert.ie/api/job/${jobid}/`);
        setJob(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch job details.");
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobid]);


  

  // Handle Login Redirection with a Random Number
  const handleLoginRedirect = () => {
    // Generate a random 4-digit number
    navigate(`/login?ref=${122344121534556}/${jobid}`);
  };

  return (
    <div>
      {/* Job Details */}
      <div className="container-fluid text-center mt-5 mb-4">
        <h3>Job Details</h3>
      </div>

      {loading ? (
        <p className="text-center">Loading job details...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : job ? (
        <div className="container-fluid mt-5 mb-4">
          <div className="col-md-12 col-12">
            <div style={{ overflowX: "auto" }}>
              <table className="table table-bordered">
                <thead>
                  <tr className="text-center">
                    <th>Job Posted</th>
                    <th>Town</th>
                    <th>County</th>
                    <th>Type</th>
                    <th>Sq. Mt.</th>
                    <th>Beds</th>
                    <th>Heat Pump</th>
                    <th>Purpose</th>
                    <th>Addition</th>
                    <th>Preferred Date</th>
                    <th>Action</th> {/* New column for action buttons */}
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>{new Date(job.created_at).toLocaleDateString()}</td>
                    <td>{job.town || "N/A"}</td>
                    <td>{job.county || "N/A"}</td>
                    <td>{job.building_type || "N/A"}</td>
                    <td>{job.property_size || "N/A"}</td>
                    <td>{job.bedrooms || "N/A"}</td>
                    <td>{job.heat_pump_installed || "N/A"}</td>
                    <td>{job.ber_purpose || "N/A"}</td>
                    <td>{job.additional_features || "N/A"}</td>
                    <td>{job.preferred_date || "N/A"}</td>
                    <td>
                      {accessToken ? (
                        <Link 
                        to={`/accessor/date/${jobid}`} 
                        state={{ jobData: job }} // Add this state prop
                        className="btn button3"
                      >
                        Quote
                      </Link>
                      ) : (
                        <button className="btn btn-warning" onClick={handleLoginRedirect}>
                          Login
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">No job details found.</p>
      )}
    </div>
  );
};

export default JobShow;

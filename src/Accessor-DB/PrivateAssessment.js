import React, { useEffect, useState } from "react";
import axios from "axios";
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


const PrivateAssessment = () => {
  // State for jobs/assessments
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);

  // State for notifications functionality
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifToast, setNotifToast] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // Fetch jobs/assessments on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get("https://backend.homecert.ie/api/private_assessment/all/", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setJobs(response.data || []); // Ensure we have an array
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const [jobid, setJobid] = useState(null);
  
 
  const fetchJobid = async () => {
    const token = localStorage.getItem("access_token");
    setLoading(true);
    try {
      const response = await axios.get("https://backend.homecert.ie/api/private_assessment/", {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      if (response.data && response.data.id) {
        const jobId = response.data.id; // Extract job ID
        navigate(`/accessor/assessment-job/${jobId}`); // Navigate immediately
      } else {
        console.error("Invalid response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const navigate = useNavigate();
  
 


  // Fetch notifications on mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    axios
      .get("https://backend.homecert.ie/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        // Assume the response data is an array and each notification has a "status" property.
        setNotifications(response.data);
      })
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  // Handler to mark all notifications as read.
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;

    // Create an array of POST requests (one for each notification)
    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://backend.homecert.ie/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update all notifications in state to "read"
      setNotifications(prev =>
        prev.map(notification => ({ ...notification, status: "read" }))
      );
      setMarkAllDisabled(true);
      setNotifToast("Notifications are marked as read");
      setTimeout(() => setNotifToast(""), 3000);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  // Count only unread notifications for the badge.
  const unreadCount = notifications.filter(n => n.status === "unread").length;

  return (
    <div className='dashboard'>
      {/* Floating Toast Message for Notifications */}
      {notifToast && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "white",
          color: "green",
          padding: "10px 20px",
          borderRadius: "5px",
          zIndex: 9999,
        }}>
          {notifToast}
        </div>
      )}

      <div className="container-fluid">
        <div className="row">
          {/* Header Section with Notifications */}
          <div className="col-md-12 text-end position-relative">
            <img src={img} alt="" className="img-fluid dashimg mx-2" />
            
            <span 
              className="notibg mx-2 text-center cursor-pointer position-relative"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <IoMdNotifications color="black" size={20} />
              {unreadCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 end-0">
                  {unreadCount}
                </span>
              )}
            </span>
            {showDropdown && (
              <div
                className="dropdown-menu show p-2 position-absolute end-0 bg-white shadow-lg rounded"
                style={{ width: "300px", maxHeight: "300px", overflowY: "auto" }}
              >
                {notifications.length > 0 ? (
                  <>
                    <div className="d-flex justify-content-end mb-2">
                      <button
                        className="btn btn-link p-0"
                        style={{textDecoration:'none'}}
                        onClick={handleMarkAllAsRead}
                        disabled={markAllDisabled}
                      >
                        Mark all as read
                      </button>
                    </div>
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className="p-2 border-bottom"
                        style={{
                          backgroundColor: notification.status === "read" ? "#f8f9fa" : "#ffffff"
                        }}
                      >
                        <p className="mb-0 small text-dark">{notification.message}</p>
                        <small className="text-dark">
                          {new Date(notification.created_at).toLocaleString()}
                        </small>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="dropdown-item text-center">No new notifications</div>
                )}
              </div>
            )}
          </div>

          {/* Breadcrumb */}
          <div className="col-md-12 text-start">
            <p>
              Homecert.ie <IoIosArrowForward /> <span className="text-dark">Private Assessments</span>
            </p>  
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>  
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">Private Assessments</div> 
          </div>

          {/* Assessments Table */}
          <div className="container-fluid mt-5 mb-4">
            <div className="row">
                <div className="col-md-9 col-9">
                <h3>Your Private Assessments are listed below:</h3>
                </div>
                <div className="col-md-3 px-4 col-3 text-center">
                <button 
      onClick={fetchJobid} 
      className="btn button3 bt-sm fontnewass d-flex align-items-center justify-content-center"
      disabled={loading}
    >
      {loading ? "Loading..." : <><FaPlus size={12} /> Add New Assessment</>}
    </button>
                </div>
            </div>
           
            <div className="col-md-12">
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      <th>Property Address</th>
                      <th>Assessment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="12" className="text-center">Loading...</td>
                      </tr>
                    ) : jobs.length > 0 ? (
                      jobs.map((job, index) => (
                        <tr className="text-center" key={job.id}>
                          <td data-label="No">{index + 1}</td>
                          <td data-label="Preferred Date">{job.job_details?.preferred_date || "N/A"}</td>
                          <td data-label="Assessment">
                           
                            {job.assessment_ids?.length > 0 ? (
                              <Link className="mx-2 text-dark" to={`/accessor/assessment/`}>
                                 Assessment{" "}<RiArrowRightUpLine style={{ backgroundColor: "#003366", color: "white", borderRadius: "5px" }} />
                              </Link>
                            ) : (
                              "N/A"
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="12" className="text-center">No jobs found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default PrivateAssessment;

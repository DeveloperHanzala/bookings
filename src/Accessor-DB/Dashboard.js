import React, { useEffect, useState } from "react";
import axios from "axios";
import './Accessor.css';
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import img1 from '../Images/dash1.png';
import { LuSquareArrowUpRight } from "react-icons/lu";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasPreferences, setHasPreferences] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return; // Avoid making requests if token is missing

    axios
      .get("https://testing.techionik.com/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        // Assume the response data is an array of notifications.
        // Each notification should have a "status" property (e.g., "unread" or "read").
        setNotifications(response.data);
      })
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  const fetchJobs = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get("https://testing.techionik.com/api/jobs/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = response.data;
      if (data.pending_jobs.length > 0) {
        setJobs(data.pending_jobs);
        setHasPreferences(true);
      } else {
        setHasPreferences(false);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  // Handler to mark all notifications as read.
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;

    // Create an array of POST requests, one for each notification.
    const markReadPromises = notifications.map(notification => 
      axios.post(
        `https://testing.techionik.com/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );

    try {
      // Wait for all notifications to be marked as read.
      await Promise.all(markReadPromises);

      // Instead of clearing notifications, update each notification's status to "read"
      setNotifications(prevNotifications =>
        prevNotifications.map(notification => ({ ...notification, status: "read" }))
      );
      // Disable the button so it cannot be clicked again.
      setMarkAllDisabled(true);
      // Show a floating (toast) message.
      setToastMessage("Notifications are marked as read");

      // Remove the toast message after 3 seconds.
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
    }
  };

  // Count only unread notifications to display in the badge.
  const unreadCount = notifications.filter(notification => notification.status === "unread").length;

  return (
    <div className="dashboard">
      {/* Floating Toast Message */}
      {toastMessage && (
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
          {toastMessage}
        </div>
      )}

      <div className="container">
        <div className="row">
          {/* Top right: Profile image and notifications */}
          <div className="col-md-12 text-end position-relative">
            <img src={img} alt="Profile" className="img-fluid dashimg mx-2" />
            <span 
              className="notibg mx-2 text-center position-relative" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <IoMdNotifications className="cursor-pointer" color="black" size={20} />
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
                        <p className="mb-0 small">{notification.message}</p>
                        <small className="text-muted">
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
              Company Name <IoIosArrowForward /> <span className="text-dark">Dashboard</span>
            </p>  
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0">
                <IoIosArrowBack size={30} />
              </p>  
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">Dashboard</div> 
          </div>

          {/* Dashboard Header */}
          <div className="container-fluid bgdash">
            <div className="row">
              <div className="col-md-8 text-light">
                <h1 className="display-5">Welcome To Company Name</h1>
                <h2 className="dashfont">Assessor Name</h2>
              </div>
              <div className="col-md-4">
                <img src={img1} alt="Dashboard" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Jobs Table */}
          <div className="container mt-5 mb-4">
            <div>
              <h3>Your live jobs are listed below:</h3>
            </div>

            <div className="col-md-12">
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
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
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.length > 0 ? (
                      jobs.map((job, index) => (
                        <tr className="text-center" key={job.id}>
                          <td>{index + 1}</td>
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
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="12" className="text-center">
                          No jobs found
                        </td>
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

export default Dashboard;

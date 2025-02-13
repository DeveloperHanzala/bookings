import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";
import './Accessor.css';
import img from '../Images/download.jpeg';

const LiveJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasPreferences, setHasPreferences] = useState(false);

  // Notifications state
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get("https://booking.homecert.ie/api/jobs/", {
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

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return; // Avoid making requests if token is missing

    axios
      .get("https://booking.homecert.ie/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        // Response data is an array of notifications.
        setNotifications(response.data);
      })
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  // Handler to mark all notifications as read.
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;

    // Create an array of POST requests—one for each notification.
    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://booking.homecert.ie/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );

    try {
      // Wait for all notifications to be marked as read.
      await Promise.all(markReadPromises);

      // Update notifications so that each now has status "read"
      setNotifications(prevNotifications =>
        prevNotifications.map(notification => ({ ...notification, status: "read" }))
      );
      // Disable the button so it cannot be clicked again.
      setMarkAllDisabled(true);
      // Show a floating toast message.
      setToastMessage("Notifications are marked as read");
      // Remove the toast message after 3 seconds.
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  // Count only unread notifications for the badge.
  const unreadCount = notifications.filter(n => n.status === "unread").length;

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
          {/* Top Right: Profile Image and Notifications */}
          <div className="col-md-12 text-end position-relative">
            <img src={img} alt="" className="img-fluid dashimg mx-2" />
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
                        style={{ backgroundColor: notification.status === "read" ? "#f8f9fa" : "#ffffff" }}
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
              Company Name <IoIosArrowForward /> <span className="text-dark">Live Jobs</span>
            </p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0">
                <IoIosArrowBack size={30} />
              </p>
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">Live Jobs</div>
          </div>

          {/* Live Jobs Table */}
          <div className="container mt-5 mb-4">
            <div>
              <h3>Your live jobs are listed below:</h3>
            </div>

            {!hasPreferences ? (
              <div className="text-center mt-4">
                <p>No jobs found. Please select your preferences first.</p>
                <Link to="/accessor/preferences" className="btn button1">
                  Go to Preferences
                </Link>
              </div>
            ) : (
              <div className="col-md-12">
                <div style={{ overflowX: "auto" }}>
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
                        <th>Quotes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobs.map((job, index) => (
                        <tr className="text-center" key={job.id}>
                          <td>{index + 1}</td>
                          <td>{new Date(job.created_at).toLocaleDateString()}</td>
                          <td>{job.nearest_town || "N/A"}</td>
                          <td>{job.county || "N/A"}</td>
                          <td>{job.building_type || "N/A"}</td>
                          <td>{job.property_size || "N/A"}</td>
                          <td>{job.bedrooms || "N/A"}</td>
                          <td>{job.heat_pump_installed || "N/A"}</td>
                          <td>{job.ber_purpose || "N/A"}</td>
                          <td>{job.additional_features || "N/A"}</td>
                          <td>{job.preferred_date || "N/A"}</td>
                          <td>
                            Quote{" "}
                            <Link to={`/accessor/date/${job.id}`} state={{ jobData: job }}>
                              <RiArrowRightUpLine
                                style={{
                                  backgroundColor: "#003366",
                                  color: "white",
                                  borderRadius: "5px",
                                }}
                              />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveJobs;

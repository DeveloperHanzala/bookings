import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Client.css";
import img from "../Images/download.jpeg";
import img1 from "../Images/dash1.png";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  // State for jobs list
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Notification-related states
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  // Fetch jobs when component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Fetch notifications when component mounts (or when accessToken changes)
  useEffect(() => {
    if (!accessToken) return;
    axios
      .get("https://testing.techionik.com/api/notifications/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        // Expecting an object with a "notifications" array.
        setNotifications(response.data?.notifications || []);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, [accessToken]);

  // Fetch jobs from API
  const fetchJobs = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get("https://testing.techionik.com/api/jobs-bids/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  // Mark all notifications as read
  const handleMarkAllAsRead = async () => {
    if (!accessToken || notifications.length === 0) return;

    const markReadPromises = notifications.map((notification) =>
      axios.post(
        `https://testing.techionik.com/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update state so that every notification is marked as read
      setNotifications((prev) =>
        prev.map((notification) => ({ ...notification, status: "read" }))
      );
      setMarkAllDisabled(true);
      setToastMessage("Notifications are marked as read");
      setTimeout(() => setToastMessage(""), 3000);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  // Calculate unread notifications count
  const unreadCount = notifications.filter((n) => n.status !== "read").length;

  return (
    <>
      {/* Floating Toast Message */}
      {toastMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 9999,
          }}
        >
          {toastMessage}
        </div>
      )}

      <div className="dashboard">
        <div className="container">
          <div className="row">
            {/* Header Section with Profile and Notifications */}
            <div className="col-md-12 text-end position-relative">
              <img src={img} alt="Profile" className="img-fluid dashimg mx-2" />
              <span
                className="notibg mx-2 text-center position-relative"
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ cursor: "pointer" }}
              >
                <IoMdNotifications color="black" size={20} />
                {unreadCount > 0 && (
                  <span className="badge bg-danger position-absolute top-0 end-0">
                    {unreadCount}
                  </span>
                )}
              </span>
              {/* Notifications Dropdown */}
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
                          onClick={handleMarkAllAsRead}
                          disabled={markAllDisabled}
                        >
                          Mark all as read
                        </button>
                      </div>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-2 border-bottom"
                          style={{
                            backgroundColor:
                              notification.status === "read" ? "#f8f9fa" : "#ffffff",
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
                Company Name <IoIosArrowForward />{" "}
                <span className="text-dark">Dashboard</span>
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

            {/* Welcome Banner */}
            <div className="container-fluid bgdash">
              <div className="row">
                <div className="col-md-8 text-light">
                  <h1 className="display-5">Welcome To Company Name</h1>
                  <h2 className="dashfont">Client Name</h2>
                </div>
                <div className="col-md-4">
                  <img src={img1} alt="Dashboard" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          {/* Jobs Table */}
          <div className="table-responsive mt-4">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <table className="table table-bordered table-hover">
                <thead className="border-0">
                  <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Property</th>
                    <th>Preferred Date</th>
                    <th>Quotes</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                      <tr key={job.id}>
                        <td>{index + 1}</td>
                        <td>{new Date(job.created_at).toLocaleDateString()}</td>
                        <td>{job.building_type || "N/A"}</td>
                        <td>{job.preferred_date || "N/A"}</td>
                        <td>
                          <Link to="/client/your-quote" state={{ bids: job.bids }}>
                            <button className="btn btn-success">View Quote</button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No jobs found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;

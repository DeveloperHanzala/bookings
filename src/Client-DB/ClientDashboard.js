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
  const [user, setuser] = useState();
  // Notification-related states
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  const accessToken = localStorage.getItem("access_token");
 

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  // Fetch jobs when component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Fetch notifications when component mounts (or when accessToken changes)
  useEffect(() => {
    if (!accessToken) return;
    axios
      .get("https://backend.homecert.ie/api/notifications/", {
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
      const response = await axios.get("https://backend.homecert.ie/api/jobs-bids/", {
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
  
  const username = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get("https://backend.homecert.ie/api/user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setuser(response.data);
      console.log(response.data)
    }
    catch (error) {
      console.error("Error fetching username:", error);
    }
  }
  useEffect(() => {
    username();
  }, []);


  // Mark all notifications as read
  const handleMarkAllAsRead = async () => {
    if (!accessToken || notifications.length === 0) return;

    const markReadPromises = notifications.map((notification) =>
      axios.post(
        `https://backend.homecert.ie/api/notifications/${notification.id}/mark-as-read/`,
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
        <div className="container-fluid">
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
                Homecert.ie <IoIosArrowForward />{" "}
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
                <div className="col-md-8 text-light text-center text-md-start">
                {user && (
  <>
    <h1 className="display-6 display-md-5 d-none d-md-block">
      Welcome To Homecert.ie
    </h1>
    <h1 className="display-6 display-md-5 d-block d-md-none">
      Welcome <span className="fw-bold">{user.first_name + " " + user.last_name}</span>
    </h1>
    <h2 className="dashfont d-none d-md-block">
      {user.first_name + " " + user.last_name}
    </h2>
  </>
)}

                </div>
                <div className="col-md-4">
                  <img src={img1} alt="Dashboard" className="img-fluid d-none d-md-block" />
                </div>
              </div>
            </div>
          </div>

          {/* Jobs Table */}
          <div className="table-responsive mt-4">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <div className="table-container">
              <div className="table-header">
                <div className="table-row table-head">
                  <div className="table-cell d-none d-md-block">No</div>
                  <div className="table-cell">Date</div>
                  <div className="table-cell">Property</div>
                  <div className="table-cell">Preferred Date</div>
                  <div className="table-cell">Quotes</div>
                </div>
              </div>
              <div className="table-body">
                {jobs.length > 0 ? (
                  jobs.map((job, index) => (
                    <div className="table-row" key={job.id}>
                      <div className="table-cell  d-none d-md-block">{index + 1}</div>
                      <div className="table-cell">{new Date(job.created_at).toLocaleDateString()}</div>
                      <div className="table-cell">{job.building_type || "N/A"}</div>
                      <div className="table-cell">{job.bids.length > 0
    ? job.bids[0].availability.split(" ")[0]
    : "N/A"}</div>
                      <div className="table-cell">
                        <Link to="/client/your-quote" state={{ bids: job.bids }}>
                          <button className="btn button1">View Quote</button>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="table-row">
                    <div className="table-cell text-center" colSpan="5">
                     You have No Bids
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;

import React, { useState, useEffect } from 'react';
import img from '../Images/download.jpeg';
import { 
  IoIosArrowDown, 
  IoIosArrowForward, 
  IoIosArrowBack 
} from "react-icons/io";
import { IoMdNotifications, IoMdAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BERcerti = () => {
  const navigate = useNavigate();

  // --- Job creation handler ---
  const handleAddButtonClick = async () => {
    const token = localStorage.getItem("access_token");
    try {
      const response = await fetch('https://booking.homecert.ie/api/client/jobs/create/', {
        method: 'GET', // Changed to POST if needed by your API
        headers: {
          Authorization: `Bearer ${token}`
        }
        // Include body if required by your API
      });
      
      if (!response.ok) {
        throw new Error('Failed to create job');
      }
      
      const data = await response.json();
      const jobId = data.job_id;
      
      // Navigate to the new URL with job_id as a parameter
      navigate(`/client/date/${jobId}`);
    } catch (error) {
      console.error('Error creating job:', error);
      // Optionally, display an error message to the user
    }
  };

  // --- Notification State & Functionality ---
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  // Fetch notifications on mount
  useEffect(() => {
    if (!accessToken) return;
    axios.get('https://booking.homecert.ie/api/notifications/', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(response => {
        setNotifications(response.data?.notifications || []);
      })
      .catch(error => {
        console.error("Error fetching notifications:", error);
      });
  }, [accessToken]);

  // Mark all notifications as read
  const handleMarkAllAsRead = async () => {
    if (!accessToken || notifications.length === 0) return;

    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://booking.homecert.ie/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      setNotifications(prev =>
        prev.map(notification => ({ ...notification, status: "read" }))
      );
      setMarkAllDisabled(true);
      setToastMessage("Notifications are marked as read");
      setTimeout(() => setToastMessage(""), 3000);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  // Compute the unread notifications count
  const unreadCount = notifications.filter(n => n.status !== "read").length;

  return (
    <div className='dashboard'>
      {/* Floating Toast Message */}
      {toastMessage && (
        <div style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          zIndex: 9999,
        }}>
          {toastMessage}
        </div>
      )}

      <div className="container">
        <div className="row">
          {/* Header Section with Profile & Notifications */}
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
          <div className="col-md-12 d-flex align-items-center ">
            <p>
              Company Name <IoIosArrowForward /> <span className="text-dark">BER get-your-certificate</span>
            </p>  
          </div>

          {/* Title & Add Button */}
          <div className="col-md-12 text-start d-flex align-items-center justify-content-between flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0">
                <IoIosArrowBack size={30} />
              </p>  
              <div className="fs-3 mx-2 fw-bold mb-0">BER get-your-certificate</div> 
            </div>
            <div>
              <button onClick={handleAddButtonClick}>
                <IoMdAdd /> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead className="border-0">
            <tr className="border-0">
              <th className="border-0 table-light1">No</th>
              <th className="border-0 table-light1">Building Name</th>
              <th className="border-0 table-light1">BER get-your-certificate</th>
              <th className="border-0 table-light1">Location</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <tr className="border-0" key={index}>
                <td className="border-0">{index + 1}</td>
                <td className="border-0">Green Town</td>
                <td className="border-0">get-your-certificate Name</td>
                <td className="border-0">
                  <Link to={'/client/get-your-certificate'}>
                    <button className="btn btn-success">View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BERcerti;

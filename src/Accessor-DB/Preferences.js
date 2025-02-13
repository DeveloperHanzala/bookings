import React, { useState, useEffect } from "react";
import axios from "axios";
import './Accessor.css';
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

const Preferences = () => {
  // State for county preferences and preference update messages
  const [selectedCounties, setSelectedCounties] = useState([]);
  const [prefNotification, setPrefNotification] = useState({ message: "", type: "" });

  // New state for notifications functionality
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifToast, setNotifToast] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

  const counties = [
    'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin',
    'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim',
    'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan',
    'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Waterford',
    'Westmeath', 'Wexford', 'Wicklow'
  ];

  // Function to update preferences via API
  const updatePreferences = async (county, isSelected) => {
    try {
      const access_token = localStorage.getItem('access_token');
      const response = await fetch('https://booking.homecert.ie/api/preference/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify({ preference: county, selected: isSelected })
      });

      if (!response.ok) {
        throw new Error('Failed to update preferences');
      }

      setPrefNotification({ message: `Preference for ${county} updated successfully!`, type: 'success' });
      setTimeout(() => setPrefNotification({ message: "", type: "" }), 3000);
    } catch (error) {
      console.error('Error updating preferences:', error);
      setPrefNotification({ message: 'Error updating preferences. Please try again.', type: 'error' });
      setTimeout(() => setPrefNotification({ message: "", type: "" }), 3000);
    }
  };

  const toggleCounty = (county) => {
    setSelectedCounties(prev => {
      let updatedCounties;
      if (prev.includes(county)) {
        updatedCounties = prev.filter(c => c !== county);
        updatePreferences(county, false); // Deselect county
      } else {
        updatedCounties = [...prev, county];
        updatePreferences(county, true); // Select county
      }
      return updatedCounties;
    });
  };

  // Fetch notifications when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    axios
      .get("https://booking.homecert.ie/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        // Assume the response is an array of notifications where each notification has a "status" property.
        setNotifications(response.data);
      })
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  // Handler to mark all notifications as read
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;

    // Create an array of POST requests—one for each notification
    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://booking.homecert.ie/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update notifications state: mark each as "read"
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

  // Count unread notifications for the badge
  const unreadCount = notifications.filter(n => n.status === "unread").length;

  return (
    <div className="dashboard">
      {/* Floating Toast for Notifications */}
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

      <div className="container">
        {/* Preference Update Notification Banner */}
        {prefNotification.message && (
          <div className={`notification-banner ${prefNotification.type}`}>
            {prefNotification.message}
          </div>
        )}
        <div className="row">
          {/* Header Section with Notifications */}
          <div className="col-md-12 text-end  position-relative">
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
              Company Name <IoIosArrowForward /> <span className="text-dark">Preferences</span>
            </p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0">
                <IoIosArrowBack size={30} />
              </p>
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">Account Preferences</div>
          </div>
          <p className="mx-5">Update your county and SMS preferences below.</p>

          {/* SMS Notifications Section */}
          <div>
            <div className="fs-3 mb-0">
              SMS Notifications <RiMessage2Fill size={30} className="text-primary" />
            </div>
            <p>
              You are currently receiving job notifications by SMS to 0877526652.
              <span className="text-dark fw-bold"> Cancel SMS Notifications</span>
            </p>
          </div>

          {/* County Preferences Section */}
          <div className="container mt-5 mb-4">
            <div className="fs-3 mb-0">
              Select Your County Lead Preferences <IoLocationSharp size={30} className="text-primary" />
            </div>
            <div className="row mt-5">
              {counties.map((county) => (
                <div className="col-md-3 mb-3" key={county}>
                  <div
                    className={`shadow rounded county-card ${selectedCounties.includes(county) ? 'selected-county' : ''}`}
                    onClick={() => toggleCounty(county)}
                  >
                    <div className="p-3 text-center">
                      <h2>{county}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Preferences;

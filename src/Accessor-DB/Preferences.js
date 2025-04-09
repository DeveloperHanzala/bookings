import React, { useState, useEffect } from "react";
import axios from "axios";
import './Accessor.css';
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

const Preferences = () => {
  // State for county preferences and update messages
  const [selectedCounties, setSelectedCounties] = useState([]);
  const [prefNotification, setPrefNotification] = useState({ message: "", type: "" });

  // State for notifications functionality
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifToast, setNotifToast] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

  const counties = [
    'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin',
    'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim',
    'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan',
    'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Waterford',
    'Westmeath', 'Wexford', 'Wicklow',
  ];

  // On mount, scroll to top and load stored preferences from localStorage.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const storedPreference = localStorage.getItem("preference");
    if (storedPreference) {
      // Stored value assumed as a comma separated string.
      const preferencesArray = storedPreference.split(",").map(c => c.trim());
      setSelectedCounties(preferencesArray);
    }
  }, []);

  // Helper function to update state and localStorage from API response.
  const updatePreferencesState = (prefData) => {
    if (prefData && prefData.length > 0) {
      console.log("API returned preference:", prefData);
      let flatArray = [];
      if (Array.isArray(prefData)) {
        // Flatten the array in case some items are comma-separated strings.
        prefData.forEach(item => {
          if (typeof item === 'string') {
            flatArray.push(...item.split(",").map(c => c.trim()));
          }
        });
        // Remove duplicate counties.
        flatArray = [...new Set(flatArray)];
      } else if (typeof prefData === 'string') {
        flatArray = prefData.split(",").map(c => c.trim());
      }
      setSelectedCounties(flatArray);
      localStorage.setItem("preference", flatArray.join(", "));
    } else {
      // If no preferences, clear state and remove from localStorage.
      setSelectedCounties([]);
      localStorage.removeItem("preference");
    }
  };

  // Function to add a county preference (using PUT)
  const addPreference = async (county) => {
    try {
      const access_token = localStorage.getItem('access_token');
      const response = await fetch('https://backend.homecert.ie/api/preference/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify({ add_preference: county })
      });
      if (!response.ok) {
        console.error("Response status:", response.status);
        throw new Error('Failed to add preference');
      }
      const data = await response.json();
      console.log("Add preference response:", data);
      updatePreferencesState(data.preference);
      setPrefNotification({ message: `Preference for ${county} added successfully!`, type: 'success' });
      setTimeout(() => setPrefNotification({ message: "", type: "" }), 3000);
    } catch (error) {
      console.error('Error adding preference:', error);
      setPrefNotification({ message: 'Error adding preference. Please try again.', type: 'error' });
      setTimeout(() => setPrefNotification({ message: "", type: "" }), 3000);
    }
  };

  // Function to remove a county preference (using DELETE)
  const removePreference = async (county) => {
    try {
      const access_token = localStorage.getItem('access_token');
      const response = await fetch('https://backend.homecert.ie/api/preference/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify({ remove_preference: county })
      });
      if (!response.ok) {
        console.error("Response status:", response.status);
        throw new Error('Failed to remove preference');
      }
      const data = await response.json();
      console.log("Remove preference response:", data);
      updatePreferencesState(data.preference);
      setPrefNotification({ message: `Preference for ${county} removed successfully!`, type: 'success' });
      setTimeout(() => setPrefNotification({ message: "", type: "" }), 3000);
    } catch (error) {
      console.error('Error removing preference:', error);
      setPrefNotification({ message: 'Error removing preference. Please try again.', type: 'error' });
      setTimeout(() => setPrefNotification({ message: "", type: "" }), 3000);
    }
  };

  // Toggle county selection (add or remove accordingly)
  const toggleCounty = (county) => {
    if (selectedCounties.includes(county)) {
      removePreference(county);
    } else {
      addPreference(county);
    }
  };

  // Fetch notifications when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    axios
      .get("https://backend.homecert.ie/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  // Handler to mark all notifications as read
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;
    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://backend.homecert.ie/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );
    try {
      await Promise.all(markReadPromises);
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

      <div className="container-fluid">
        {/* Preference Update Notification Banner */}
        {prefNotification.message && (
          <div className={`notification-banner ${prefNotification.type}`}>
            {prefNotification.message}
          </div>
        )}
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
                        style={{ textDecoration: 'none' }}
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
              Homecert.ie <IoIosArrowForward /> <span className="text-dark">Preferences</span>
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

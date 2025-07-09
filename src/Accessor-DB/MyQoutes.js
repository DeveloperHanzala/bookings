import React, { useState, useEffect } from "react";
import axios from "axios";
import './Accessor.css';
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";

const MyQoutes = () => {
  // State for quotes
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for notifications
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  // Fetch quotes on mount
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await fetch("https://backend.homecert.ie/api/my-quotes/", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        
        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  

  // Fetch notifications on mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    axios
      .get("https://backend.homecert.ie/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        // Set the notifications state (assumed array, each with a "status" property)
        setNotifications(response.data);
      })
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  // Handler to mark all notifications as read.
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;

    // Send a request for each notification to mark it as read
    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://backend.homecert.ie/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update all notifications in state to status "read"
      setNotifications(prevNotifications =>
        prevNotifications.map(notification => ({ ...notification, status: "read" }))
      );
      setMarkAllDisabled(true);
      setToastMessage("Notifications are marked as read");

      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  // Count unread notifications for the badge.
  const unreadCount = notifications.filter(n => n.status === "unread").length;

  if (loading) return <div className="text-center mt-4">Loading quotes...</div>;
  if (error) return <div className="text-center text-danger mt-4">Error: {error}</div>;

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

      <div className="container-fluid">
        <div className="row">
          {/* Top Bar: Profile Image, Arrow and Notifications */}
          <div className="col-md-12 text-end position-relative">
            <img src={img} alt="" className="img-fluid dashimg mx-2" />
           
            {/* Notifications icon with onClick to toggle dropdown */}
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
              HomeLix <IoIosArrowForward /> <span className="text-dark">My Qoutes</span>
            </p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0">
                <IoIosArrowBack size={30} />
              </p>
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">My Qoutes</div>
          </div>

          <p className="mx-5">Here's your live pending quotes.</p>

          {/* Quotes Table */}
          <div className="container-fluid mt-5 mb-4">
            <div className="col-md-12 ">
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
                      <th>Survey Date</th>
                      <th className="text-danger">Lowest Quote</th>
                      <th>My Quote</th>
                      <th>Re-Quote</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotes.map((quote, index) => (
                      <tr className="text-center" key={quote.bid_id}>
                        <td data-label="No">{index + 1}</td>
                        <td data-label="Job Posted">{new Date(quote.job.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</td>
                        <td data-label="Town">{quote.job.nearest_town}</td>
                        <td data-label="County">{quote.job.county}</td>
                        <td data-label="Type">{quote.job.property_type}</td>
                        <td data-label="Sq. Mt.">{quote.job.property_size}</td>
                        <td data-label="Beds">{quote.job.bedrooms}</td>
                        <td data-label="Heat Pump">{quote.job.heat_pump_installed}</td>
                        <td data-label="Purpose">{quote.job.ber_purpose}</td>
                        <td data-label="Addition">{quote.job.additional_features}</td>
                        <td data-label="Survey Date">{new Date(quote. availability).toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' })}</td>
                        <td data-label="Lowest Quote" className="text-danger">
                          €{quote.job.lowest_bid?.amount.toFixed(2) || 'N/A'}
                        </td>
                        <td data-label="My Quote">€{quote.amount.toFixed(2)}</td>
                        <td> <Link className="btn btn-warning btn-sm fontqoute" to={`/accessor/re-quote/${quote.bid_id}`}>
                                                    Re-Quote
                                                      <RiArrowRightUpLine
                                                        style={{
                                                          backgroundColor: "#003366",
                                                          color: "white",
                                                          borderRadius: "5px",
                                                        }}
                                                      />
                         </Link></td>
                      </tr>
                    ))}
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

export default MyQoutes;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Notifications state
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

  const accessToken = localStorage.getItem("access_token");

  // Fetch clients from API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const headers = {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        };

        const response = await axios.get('https://testing.techionik.com/api/admin/clients/', { headers });
        setClients(response.data); // Assuming the API returns an array of clients
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        setLoading(false);
      }
    };

    fetchClients();
  }, [accessToken]);

  // Fetch notifications from API
  useEffect(() => {
    if (!accessToken) return;

    axios.get('https://testing.techionik.com/api/notifications/', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(response => {
        // Assume the response data has a "notifications" array.
        setNotifications(response.data?.notifications || []);
      })
      .catch(error => {
        console.error("Error fetching notifications:", error);
      });
  }, [accessToken]);

  // Handler to mark all notifications as read
  const handleMarkAllAsRead = async () => {
    if (!accessToken || notifications.length === 0) return;

    // Create a POST request for each notification
    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://testing.techionik.com/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update each notification's status to "read"
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

  // Count only unread notifications for the badge
  const unreadCount = notifications.filter(n => n.status !== "read").length;

  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='row'>
          {/* Header Section with Notifications */}
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
                style={{ width: '300px', maxHeight: '300px', overflowY: 'auto' }}
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
          <div className="col-md-12 text-start">
            <p>
              Company Name <IoIosArrowForward /> <span className="text-dark">Clients</span>
            </p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>
            <div className="fs-3 mx-2 fw-bold mb-0">Clients</div>
          </div>
        </div>
      </div>

      {/* Toast Message for Notifications */}
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

      <div className="table-responsive mt-3">
        <h5 className='mb-3'>All Clients</h5>
        {loading ? (
          <p>Loading clients...</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className='border-0 table-light1'>No</th>
                <th className='border-0 table-light1'>Name</th>
                <th className='border-0 table-light1'>E-mail</th>
                <th className='border-0 table-light1'>Active Jobs</th>
                <th className='border-0 table-light1'>Status</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={client.id}>
                  <td className='border-0'>{index + 1}</td>
                  <td className='border-0 fw-bold'>
                    <Link to={`/admin/client-profile/${client.id}`} style={{ textDecoration: "none", color: "black" }}>
                      {client.name}
                    </Link>
                  </td>
                  <td className='border-0'>{client.email}</td>
                  <td className='border-0'>{client.job_count}</td>
                  <td className='border-0'>
                    <button className='btn btn-success'>Active</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminClients;

import React, { useState, useEffect } from "react";
import axios from "axios";
import './Accessor.css';
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";

const MyClients = () => {
  // Clients state
  const [showModal, setShowModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  // Notifications state
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  // Fetch clients on mount
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await fetch("https://backend.homecert.ie/api/my-clients/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch clients");
        const data = await response.json();
        // 'data.bids' contains all bid objects including job and client details
        setClients(data.bids);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, []);

  // Fetch notifications on mount
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return; // Avoid making requests if token is missing

    axios
      .get("https://backend.homecert.ie/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        // Set the notifications state (each notification should have a "status" property)
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
      // Update each notification's status to "read"
      setNotifications(prevNotifications =>
        prevNotifications.map(notification => ({ ...notification, status: "read" }))
      );
      // Disable the button and show a toast message
      setMarkAllDisabled(true);
      setToastMessage("Notifications are marked as read");
      setTimeout(() => {
        setToastMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  };

  // Count only unread notifications for the badge
  const unreadCount = notifications.filter(n => n.status === "unread").length;

  // Open/close client details modal
  const handleOpenModal = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClient(null);
  };

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
          {/* Header Section */}
          <div className="col-md-12 text-end position-relative">
            <img src={img} alt="Dashboard" className="img-fluid dashimg mx-2" />
        
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
              HomeLix <IoIosArrowForward /> <span className="text-dark">My Clients</span>
            </p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 col-12 text-start ">
            <div className="d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">My Clients</div>
            </div>
          <p className="mx-5">
            Here's your successful quotes on HomeLix, Please contact your clients within one business day.
          </p>
          </div>

          {/* Clients Table */}
          <div className="container mt-5 mb-4">
            <div className="col-md-12">
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                     
                      <th>Town</th>
                      <th>County</th>
                      <th>Type</th>
                      
                      <th>Balance</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((bid, index) => (
                      <tr className="text-center" key={bid.bid_id}>
                        <td data-label="No">{index + 1}</td>
                      
                        <td data-label="Nearest Town">{bid.job.nearest_town}</td>
                        <td data-label="County">{bid.job.county}</td>
                        <td data-label="Type">{bid.job.property_type}</td>
                       
                        <td data-label="Balance">€{bid.amount}</td>
                        <td >
                          {/* <span className="d-none d-md-block">
                          Contact{" "}
                          <RiArrowRightUpLine
                            style={{
                              backgroundColor: "#003366",
                              color: "white",
                              borderRadius: "5px",
                              cursor: 'pointer'
                            }}
                            onClick={() => handleOpenModal(bid.job.client)}
                          />
                        </span> */}


                        <button className=""  onClick={() => handleOpenModal(bid.job.client)}>
                          Contact{" "}
                          <RiArrowRightUpLine
                            style={{
                              backgroundColor: "#003366",
                              color: "white",
                              borderRadius: "5px",
                              cursor: 'pointer'
                            }}
                           
                          />
                        </button>


                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Client Details Modal */}
          {showModal && selectedClient && (
            <div
              className="modal fade show"
              style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Contact Information</h5>
                    <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Name:</strong> {selectedClient.name}</p>
                    <p><strong>Phone:</strong> {selectedClient.phone_number}</p>
                    <p><strong>Email:</strong> {selectedClient.eamil}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MyClients;

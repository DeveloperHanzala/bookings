import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoMdNotifications, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";

const BERMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Notifications state
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);

  const accessToken = localStorage.getItem("access_token");

  // Fetch BER members
  useEffect(() => {
    axios.get('https://testing.techionik.com/api/bermember/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setMembers(response.data?.accessor_details || []);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching BER members:", error);
      setError("Failed to fetch members");
      setLoading(false);
    });
  }, [accessToken]);

  // Fetch notifications
  useEffect(() => {
    axios.get('https://testing.techionik.com/api/notifications/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      // Assuming the API returns an object with a "notifications" array.
      setNotifications(response.data?.notifications || []);
    })
    .catch(error => {
      console.error("Error fetching notifications:", error);
    });
  }, [accessToken]);

  // Handler to mark all notifications as read
  const handleMarkAllAsRead = async () => {
    if (!accessToken || notifications.length === 0) return;

    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://testing.techionik.com/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update all notifications in state to have status "read"
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

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className='dashboard'>
      {/* Floating Toast Message for Notifications */}
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

      <div className='container'>
        <div className='row'>
          {/* Header with Profile Image and Notifications */}
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
            <p>Company Name <IoIosArrowForward /> <span className="text-dark">Assessors</span></p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">Assessors</div>
          </div>
        </div>
      </div>

      <div className="table-responsive mt-3">
        <h5 className='mb-3'>All Assessors</h5>
        <table className="table table-bordered">
          <thead className="border-0">
            <tr className='border-0'>
              <th className='border-0 table-light1'>No</th>
              <th className='border-0 table-light1'>Name</th>
              <th className='border-0 table-light1'>E-mail</th>
              <th className='border-0 table-light1'>Active Jobs</th>
              <th className='border-0 table-light1'>Certification Status</th>
              <th className='border-0 table-light1'>Status</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member, index) => (
                <tr key={index} className='border-0'>
                  <td className='border-0'>{index + 1}</td>
                  <td className='border-0'>{member.name || 'Not Available'}</td>
                  <td className='border-0'>{member.email || 'Not Available'}</td>
                  <td className='border-0'>{member.total_projects || 0}</td>
                  <td className='border-0'>
                    <Link className='text-dark' to='/admin/ber-member-certificate'>
                      View certificate
                      <MdArrowOutward color='white' className='rounded-circle mx-2' style={{ backgroundColor: "#003366" }} />
                    </Link>
                  </td>
                  <td className='border-0'>
                    <Link to={''}>
                      <button className={`btn ${member.is_active ? 'btn-success' : 'btn-warning'}`}>
                        {member.is_active ? 'Active' : 'Inactive'}
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">No members found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BERMembers;

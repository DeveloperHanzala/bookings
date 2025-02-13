import React, { useState, useEffect } from 'react';
import img from '../Images/download.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';

const ActiveJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        console.error('No access token found');
        return;
      }

      try {
        const response = await fetch('https://testing.techionik.com/api/admin/ejobs/', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  // Helper function to return a Bootstrap button class based on job status
  const getStatusButtonClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'btn-success';
      case 'pending':
        return 'btn-danger';
      case 'in progress':
        return 'btn-warning';
      default:
        return 'btn-secondary';
    }
  };

  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Fetch notifications from API on mount
  useEffect(() => {
    axios.get('https://testing.techionik.com/api/notifications/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      // Assume API returns an object with a "notifications" array.
      setNotifications(response.data?.notifications || []);
    })
    .catch(error => {
      console.error("Error fetching notifications:", error);
    });
  }, [accessToken]);

  // Handler to mark all notifications as read
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;
    
    // Create a POST request for each notification
    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://testing.techionik.com/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update notification status to "read" in state
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

  return (
    <div>
      <div className='dashboard'>
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
            {/* Header with Profile Image and Notifications */}
            <div className="col-md-12 text-end position-relative">
              <img src={img} alt="" className="img-fluid dashimg mx-2" />
              <span
                className="notibg mx-2 text-center position-relative"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <IoMdNotifications className="cursor-pointer" color="black" size={20} />
                {notifications.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 end-0">
                    {notifications.filter(n => n.status !== "read").length}
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
                          <small className="text-muted">{new Date(notification.created_at).toLocaleString()}</small>
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
              <div>
                <p>Company Name <IoIosArrowForward /> <span className="text-dark">Active Jobs</span></p>
              </div>
            </div>

            {/* Page Title */}
            <div className="col-md-12 text-start d-flex align-items-center justify-content-between flex-row">
              <div className="d-flex align-items-center">
                <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>
                <div className="fs-3 mx-2 fw-bold mb-0">Active Jobs</div>
              </div>
            </div>

            {/* Jobs Table */}
            <div className="table-responsive mt-3">
              <table className="table table-bordered">
                <thead className="border-0">
                  <tr className='border-0 text-center'>
                    <th className='border-0 table-light1'>No</th>
                    <th className='border-0 table-light1'>Job Posted</th>
                    <th className='border-0 table-light1'>County</th>
                    <th className='border-0 table-light1'>Type</th>
                    <th className='border-0 table-light1'>Sq. Mt.</th>
                    <th className='border-0 table-light1'>Beds</th>
                    <th className='border-0 table-light1'>Heat Pump</th>
                    <th className='border-0 table-light1'>Purpose</th>
                    <th className='border-0 table-light1'>Preferred Date</th>
                    <th className='border-0 table-light1'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr key={job.id} className='border-0 text-center'>
                      <td className='border-0'>{index + 1}</td>
                      <td className='border-0'>{formatDate(job.created_at)}</td>
                      <td className='border-0'>{job.county || '-'}</td>
                      <td className='border-0'>{job.building_type || '-'}</td>
                      <td className='border-0'>{job.property_size || '-'}</td>
                      <td className='border-0'>{job.bedrooms || '-'}</td>
                      <td className='border-0'>{job.heat_pump_installed || '-'}</td>
                      <td className='border-0'>{job.ber_purpose || '-'}</td>
                      <td className='border-0'>{formatDate(job.preferred_date)}</td>
                      <td className='border-0'>
                        <button className={`btn ${getStatusButtonClass(job.status)}`}>
                          {job.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> {/* end row */}
        </div> {/* end container */}
      </div> {/* end dashboard */}
    </div>
  );
};

export default ActiveJobs;

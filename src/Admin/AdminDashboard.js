import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import img1 from '../Images/dash1.png';
import { Line } from "react-chartjs-2";
import { RiArrowRightUpLine } from "react-icons/ri";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const AdminDashboard = () => {
  // State for notifications
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifToast, setNotifToast] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  
  // Get the access token
  const accessToken = localStorage.getItem("access_token");

  // Card data state (for admin stats)
  const [cardData, setCardData] = useState([
    {
      title: "Total Accessors",
      value: 0,
      percentage: "0%",
      trendColor: "green",
      graphData: [0, 0, 0, 0, 0],
    },
    {
      title: "Total Clients",
      value: 0,
      percentage: "0%",
      trendColor: "#003366",
      graphData: [0, 0, 0, 0, 0],
    },
    {
      title: "Total Pending Jobs",
      value: 0,
      percentage: "0%",
      trendColor: "red",
      graphData: [0, 0, 0, 0, 0],
    },
  ]);

  // Colors for the line graph datasets and legend
  const lineColors = [
    "#003366",
    "red",
    "rgb(2, 202, 2)",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];

  // Fetch card data when component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem("access_token");
        const headers = {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const [resAccessors, resClients, resPendingJobs] = await Promise.all([
          fetch('https://testing.techionik.com/api/admin/total-accessors/', { headers }),
          fetch('https://testing.techionik.com/api/admin/total-clients/', { headers }),
          fetch('https://testing.techionik.com/api/admin/total-pending-jobs/', { headers }),
        ]);

        const [accessorsData, clientsData, pendingJobsData] = await Promise.all([
          resAccessors.json(),
          resClients.json(),
          resPendingJobs.json(),
        ]);

        const dataArray = [
          { title: "Total Accessors", value: accessorsData.total_accessors, graphData: accessorsData.graphData || [accessorsData.total_accessors] },
          { title: "Total Clients", value: clientsData.total_clients, graphData: clientsData.graphData || [clientsData.total_clients] },
          { title: "Total Pending Jobs", value: pendingJobsData.total_pending_jobs, graphData: pendingJobsData.graphData || [pendingJobsData.total_pending_jobs] },
        ];

        // Calculate total sum to compute percentages
        const totalSum = dataArray.reduce((acc, item) => acc + item.value, 0);
        const updatedData = dataArray.map((item) => {
          const percentage = totalSum > 0 ? ((item.value / totalSum) * 100).toFixed(2) : 0;
          return {
            ...item,
            percentage: `${percentage}%`,
          };
        });

        setCardData(updatedData);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    }
    fetchData();
  }, []);

  // Fetch notifications when component mounts
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    axios.get('https://testing.techionik.com/api/notifications/', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        // Assume the API returns an object with a "notifications" array
        setNotifications(response.data?.notifications || []);
      })
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  // Handler to mark all notifications as read
  const handleMarkAllAsRead = async () => {
    const token = localStorage.getItem("access_token");
    if (!token || notifications.length === 0) return;

    const markReadPromises = notifications.map(notification =>
      axios.post(
        `https://testing.techionik.com/api/notifications/${notification.id}/mark-as-read/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
    );

    try {
      await Promise.all(markReadPromises);
      // Update all notifications to have a status of "read"
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

  // Function to generate dynamic dates based on the graph data length
  const generateDates = (dataLength) => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < dataLength; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() - (dataLength - 1 - i));
      dates.push(
        newDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })
      );
    }
    return dates;
  };

  const dates = generateDates(cardData[0]?.graphData?.length || 0);

  return (
    <div className='dashboard'>
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
                        <p className="mb-0 small text-dark">{notification.message}</p>
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
          <div className="col-md-12 text-start">
            <p>
              Company Name <IoIosArrowForward /> <span className="text-dark">Dashboard</span>
            </p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center flex-row">
            <div className="d-flex align-items-center">
              <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>
            </div>
            <div className="fs-3 mx-2 fw-bold mb-0">Dashboard</div>
          </div>

          {/* Dashboard Header */}
          <div className="container-fluid bgdash">
            <div className="row">
              <div className="col-md-8 text-light">
                <h1 className="display-5">Welcome To Company Name</h1>
                <h2 className="dashfont">Admin Name</h2>
              </div>
              <div className="col-md-4">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Toast Message for Notifications */}
      {notifToast && (
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
          {notifToast}
        </div>
      )}

      <div className="container my-5">
        {/* Card Section */}
        <div className="row">
          {cardData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-md-12">
                      <h6 className="card-title text-muted">{item.title}</h6>
                      <h3 className="card-value fw-bold">{item.value}</h3>
                      <div className="d-flex justify-content-center align-items-center mt-3">
                        <span style={{ color: item.trendColor, fontWeight: 'bold' }}>
                          {item.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reports Section */}
        <div className="row no-overflow-x">
          <div className="col-12">
            <div className="reports-container no-overflow-x p-4 shadow bg-white rounded">
              <div className="d-flex align-items-center flex-column flex-md-row justify-content-between">
                <div>
                  <h3 className="text-center mb-4">REPORTS</h3>
                </div>
                <div>
                  {/* Legend */}
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    {cardData.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center me-3"
                        style={{ fontSize: "14px" }}
                      >
                        <div
                          className="legend-color"
                          style={{
                            width: "15px",
                            height: "15px",
                            backgroundColor: lineColors[index % lineColors.length],
                            marginRight: "5px",
                          }}
                        ></div>
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Line Graph */}
              <div style={{ height: "400px", position: "relative" }}>
                <Line
                  data={{
                    labels: dates,
                    datasets: cardData.map((item, index) => ({
                      label: item.title,
                      data: item.graphData,
                      borderColor: lineColors[index % lineColors.length],
                      fill: false,
                      tension: 0.4,
                      borderWidth: 2,
                      pointRadius: 4,
                    })),
                  }}
                  options={{
                    plugins: {
                      legend: { display: true },
                    },
                    scales: {
                      x: {
                        display: true,
                        title: { display: true, text: "Dates" },
                      },
                      y: {
                        display: true,
                        title: { display: true, text: "Values" },
                        beginAtZero: true,
                      },
                    },
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

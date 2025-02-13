import React, { useState, useEffect } from 'react';
import img from '../Images/download.jpeg';
import { IoIosArrowDown, IoMdNotifications, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Line } from "react-chartjs-2";
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

const Financial = () => {
  // Notifications state and related
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  // Fetch notifications on mount
  useEffect(() => {
    axios.get('https://testing.techionik.com/api/notifications/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {
        // Expecting an object with a "notifications" array.
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

  // Compute the count of unread notifications
  const unreadCount = notifications.filter(n => n.status !== "read").length;

  // Data for cards
  const data = [
    {
      title: "Networth",
      value: "$57476",
      percentage: (
        <>
          <strong> +21.4%</strong> +$67k today
        </>
      ),
      trend: "up",
      trendColor: "green",
      graphData: [2040, 2000, 2500, 2450, 2456],
    },
    {
      title: "Income",
      value: "$27476",
      percentage: (
        <>
          <strong> +13%</strong> +$57k today
        </>
      ),
      trend: "Down",
      trendColor: "orange",
      graphData: [1012, 11110, 11115, 9120, 19125],
    },
    {
      title: "Refunds",
      value: "$67476",
      percentage: (
        <>
          <strong> +13%</strong> +$67k today
        </>
      ),
      trend: "up",
      trendColor: "green",
      graphData: [2400, 2420, 2430, 2450, 2456],
    },
  ];

  const lineColors = ["#003366", "rgb(2, 202, 2)", "red", "#4BC0C0", "#9966FF", "#FF9F40"];

  // Generate dynamic dates based on the length of the first dataset's graphData
  const generateDates = (dataLength) => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < dataLength; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() - (dataLength - 1 - i)); // Adjust backwards
      dates.push(
        newDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })
      );
    }
    return dates;
  };

  const dates = generateDates(data[0]?.graphData?.length || 0);

  return (
    <>
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

      <div className='dashboard'>
        <div className='container'>
          <div className='row'>
            {/* Header Section with Profile and Notifications */}
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
                Company Name <IoIosArrowForward /> <span className="text-dark">Financial Overview</span>
              </p>
            </div>

            {/* Page Title */}
            <div className="col-md-12 text-start d-flex align-items-center flex-row">
              <div className="d-flex align-items-center">
                <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p>
              </div>
              <div className="fs-3 mx-2 fw-bold mb-0">Financial Overview</div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <div className="reports-container p-4 shadow bg-white rounded">
                <div className='d-flex align-items-center flex-column flex-md-row justify-content-between'>
                  <div>
                    <h3 className="text-center mb-4">REPORTS</h3>
                  </div>
                  <div>
                    {/* Legend */}
                    <div className="d-flex justify-content-center align-items-center mb-4">
                      {data.map((item, index) => (
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
                      datasets: data.map((item, index) => ({
                        label: item.title,
                        data: item.graphData,
                        borderColor: lineColors[index % lineColors.length],
                        fill: false,
                        tension: 0.4,
                      })),
                    }}
                    options={{
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        x: {
                          display: true,
                          title: { display: true, text: "Dates" },
                        },
                        y: {
                          display: true,
                          title: { display: true, text: "Values" },
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
    </>
  );
};

export default Financial;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../Images/download.jpeg';
import { 
  IoIosArrowDown, 
  IoMdNotifications, 
  IoIosArrowForward, 
  IoIosArrowBack 
} from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Buildings = () => {
  // States for assets & filters
  const [assetsData, setAssetsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    property_type: '',
    property_size: '',
    bedrooms: '',
    county: '',
    nearest_town: ''
  });

  // Filter options
  const counties = [
    'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin',
    'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim',
    'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan',
    'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Waterford',
    'Westmeath', 'Wexford', 'Wicklow'
  ];

  const propertyTypes = [
    'Detached', 'Semi-detached', 'Mid-terrace', 'Apartment', 'Duplex', 'Bungalow', 'Multi-unit', 'Other'
  ];

  const propertySizes = [
    '500 sqft', '1000 sqft', '1500 sqft', '2000 sqft', '2500 sqft', '3000 sqft'
  ];

  const bedrooms = ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'];

  const towns = [
    'Carlow Town', 'Cavan Town', 'Ennis', 'Cork City', 'Letterkenny', 'Dublin',
    'Galway City', 'Tralee', 'Naas', 'Kilkenny City', 'Portlaoise', 'Carrick-on-Shannon',
    'Limerick City', 'Longford Town', 'Dundalk', 'Castlebar', 'Navan', 'Monaghan Town',
    'Tullamore', 'Roscommon Town', 'Sligo Town', 'Clonmel', 'Waterford City',
    'Mullingar', 'Wexford Town', 'Wicklow Town'
  ];

  // Notification-related states
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  // Fetch assets data on mount
  useEffect(() => {
    axios.get('https://booking.homecert.ie/api/job-search/')
      .then(response => {
        setAssetsData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Fetch notifications on mount
  useEffect(() => {
    if (!accessToken) return;
    axios.get('https://booking.homecert.ie/api/notifications/', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(response => {
        // Expecting an object with a "notifications" array.
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
      // Update state so that every notification is marked as "read"
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

  // Handlers for filtering
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const filtered = assetsData.filter(asset => {
      return (
        (filters.property_type === '' || asset.property_type === filters.property_type) &&
        (filters.property_size === '' || asset.property_size === filters.property_size) &&
        (filters.bedrooms === '' || asset.bedrooms === filters.bedrooms) &&
        (filters.county === '' || asset.county === filters.county) &&
        (filters.nearest_town === '' || asset.nearest_town === filters.nearest_town)
      );
    });
    setFilteredData(filtered);
  };

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
          {/* Header Section with Profile and Notifications */}
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
          <div className="col-md-12 text-start">
            <p>
              Company Name <IoIosArrowForward /> <span className="text-dark">Buildings</span>
            </p>
          </div>

          {/* Page Title */}
          <div className="col-md-12 text-start d-flex align-items-center">
            <IoIosArrowBack size={30} />
            <div className="fs-3 mx-2 fw-bold">Buildings</div>
          </div>
        </div>
      </div>

      {/* Filters & Assets Table */}
      <div className="container bg-light p-3 my-2">
        <div className="filters mb-4">
          <div className="row g-2">
            {[
              { name: 'property_type', label: 'Property Type', options: propertyTypes },
              { name: 'property_size', label: 'Property Size', options: propertySizes },
              { name: 'bedrooms', label: 'No of Bedrooms', options: bedrooms },
              { name: 'county', label: 'Property County', options: counties },
              { name: 'nearest_town', label: 'Nearest Town', options: towns }
            ].map((filter, index) => (
              <div className="col-md-2 col-sm-6" key={index}>
                <select 
                  name={filter.name} 
                  className="form-select p-3" 
                  value={filters[filter.name]} 
                  onChange={handleFilterChange}
                >
                  <option value="" disabled>{filter.label}</option>
                  {filter.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className="col-md-1 col-sm-6">
              <button className="btn button12 p-3 w-100" onClick={handleSearch}>
                <FaSearch size={30} />
              </button>
            </div>
          </div>
        </div>

        <h5 className="mb-3">All Assets</h5>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Building Name</th>
                <th>BER Certificate</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((asset, index) => (
                <tr key={asset.id}>
                  <td>{index + 1}</td>
                  <td>{asset.name}</td>
                  <td>{asset.ber_purpose}</td>
                  <td>{asset.nearest_town}, {asset.county}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Buildings;

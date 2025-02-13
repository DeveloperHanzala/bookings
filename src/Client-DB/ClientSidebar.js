import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Client.css";
import { AiOutlineBars } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { BsBagCheckFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { PiCertificateBold } from "react-icons/pi";

const ClientSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Remove access token from localStorage
    localStorage.removeItem("access_token");
    
    // Redirect to login page
    navigate("/login"); // Replace with your actual login route
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <CgClose size={30} /> : <AiOutlineBars size={30} className="" />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <NavLink
              to="/client/dashboard"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><RxDashboard size={25} className="mx-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/client/buildings"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><HiBuildingOffice2 size={25} className="mx-2" />
              Buildings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/client/ber-certificate"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><PiCertificateBold size={25} className="mx-2" />
              BER Certificate
            </NavLink>
          </li>
        
        </ul>

        {/* Logout Button */}
        <div className="">
        <button className="sidebar-logout btn " onClick={handleLogout}>
          Logout
        </button>
        </div>
      </div>
    </>
  );
};

export default ClientSidebar;





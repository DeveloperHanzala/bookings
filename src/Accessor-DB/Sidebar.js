import React, { useState } from "react";
import { NavLink, useNavigate  } from "react-router-dom";
import "./Accessor.css";
import { AiOutlineBars } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsBagCheckFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { BsFillFileBarGraphFill } from "react-icons/bs";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Remove access token from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("first");
    localStorage.removeItem("last");
    
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
        {isOpen ? <CgClose size={20} color="white" /> : <AiOutlineBars size={20} className="" color="white" />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <NavLink
              to="/accessor/dashboard"
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
              to="/accessor/live-jobs"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><RiShoppingBagFill size={25} className="mx-2" />
              Live Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessor/my-quotes"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><BsBagCheckFill size={25} className="mx-2" />
              My Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessor/my-clients"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><FaPeopleGroup size={25} className="mx-2" />
              My Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessor/preferences"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><FaUserCheck size={25} className="mx-2" />
              Preferences
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessor/assessments"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><BsFillFileBarGraphFill size={25} className="mx-2" />
              Assessments
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

export default Sidebar;

import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { IoMdPeople } from "react-icons/io";
import { RiShoppingBagFill } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdAutoGraph } from "react-icons/md";
const AdminSidebar = () => {
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
        {isOpen ? <CgClose size={20} color="white" /> : <AiOutlineBars size={20} color="white" className="" />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <NavLink
              to="/admin/dashboard"
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
              to="/admin/clients"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><IoMdPeople size={25} className="mx-2" />
              Clients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/ber-members"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><PiCertificateBold size={25} className="mx-2" />
              {/* BER Members */} Assessors
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/active-jobs"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><RiShoppingBagFill size={25} className="mx-2" />
              Active Jobs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/payments"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><LiaCoinsSolid size={25} className="mx-2" />
              Payments/Refunds
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/finance"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              onClick={toggleSidebar}
            ><MdAutoGraph size={25} className="mx-2" />
              Finance
            </NavLink>
          </li>
          <li className="d-block d-md-none"> 
          <button className="sidebar-logout btn " onClick={handleLogout}>
          Logout
        </button>
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

export default AdminSidebar;





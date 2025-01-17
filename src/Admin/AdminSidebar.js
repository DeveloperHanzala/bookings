import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Your logout logic goes here
    console.log("User logged out");
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
              BER Members
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





import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import img from '../Images/logo.png'
const Navbar = () => {
  const location = useLocation(); // Use useLocation hook to get the current path

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <Link to={'/'} class="navbar-brand mx-3">
      <img src={img} alt='logo' width={100} />
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 px-0 px-md-3 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} // Compare the pathname to set the active class
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/booking"
                className={`nav-link mx-2 ${location.pathname === '/booking' ? 'active' : ''}`}
              >
                Get A Ber Cert
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/assessor-registration"
                className={`nav-link mx-2 ${location.pathname === '/assessor-registration' ? 'active' : ''}`}
              >
                Assessor Registration
              </Link>
            </li>
            
            {/* <li className="nav-item">
              <a
                className={`nav-link mx-2 ${location.pathname === '/educational-resources' ? 'active' : ''}`}
                href="#"
              >
                Educational Resources
              </a>
            </li> */}
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link mx-2 ${location.pathname === '/contact' ? 'active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="padright">
           <Link to={"/login"}>
           <button className="btn logbtn" type="submit">
              LOG IN
            </button>
           </Link> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

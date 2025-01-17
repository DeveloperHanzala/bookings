import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Login";
import Booking from "./BOOKING PAGES/Booking";
import AssessorRegistration from "./Pages/AssessorRegistration";
import Contact from "./Pages/Contact";

// Main layout with Navbar and Footer
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="main-content">{children}</div>
    <Footer />
  </>
);

// Layout without Navbar and Footer
const NoNavbarFooterLayout = ({ children }) => (
  <div className="no-navbar-footer">
    <div className="main-content">{children}</div>
  </div>
);

const MainApp = () => {
  return (
    <Routes>
      {/* Routes with Navbar and Footer */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/booking"
        element={
          <MainLayout>
            <Booking />
          </MainLayout>
        }
      />
      <Route
        path="/accessor-registration"
        element={
          <MainLayout>
            <AssessorRegistration />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      {/* Routes without Navbar and Footer */}
      <Route
        path="/login"
        element={
          <NoNavbarFooterLayout>
            <Login />
          </NoNavbarFooterLayout>
        }
      />
    </Routes>
  );
};

export default MainApp;

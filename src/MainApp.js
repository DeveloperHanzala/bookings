import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Login";
import Booking from "./BOOKING PAGES/Booking";
import AssessorRegistration from "./Pages/AssessorRegistration";
import Contact from "./Pages/Contact";
import SignUp from "./SignUp";
import ThankYou from "./Pages/ThankYou";
import ForgetPassword from "./Pages/ForgetPassword";
import Pin from "./Pages/Pin";
import ConfirmPassword from "./Pages/ConfirmPasword";

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
        path="/assessor-registration"
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
      {/* <Route
        path="/signup"
        element={
          <NoNavbarFooterLayout>
            <SignUp />
          </NoNavbarFooterLayout>
        }
      /> */}
       <Route
        path="/thank-you"
        element={
          <NoNavbarFooterLayout>
            <ThankYou />
          </NoNavbarFooterLayout>
        }
      />
       <Route
        path="/forget-password"
        element={
          <NoNavbarFooterLayout>
            <ForgetPassword />
          </NoNavbarFooterLayout>
        }
      />
       <Route
        path="/forget-password/pin"
        element={
          <NoNavbarFooterLayout>
            <Pin />
          </NoNavbarFooterLayout>
        }
      />
       <Route
        path="/confirm-password"
        element={
          <NoNavbarFooterLayout>
            <ConfirmPassword />
          </NoNavbarFooterLayout>
        }
      />
    </Routes>
  );
};

export default MainApp;

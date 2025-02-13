import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Sidebar from "./Accessor-DB//Sidebar";
import Dashboard from "./Accessor-DB/Dashboard";
import DatePickerComponent from "./Accessor-DB/DatePickerComponent ";
import Quote from "./Accessor-DB/Quote";
import LiveJobs from "./Accessor-DB/LiveJobs";
import MyQoutes from "./Accessor-DB/MyQoutes";
import MyClients from "./Accessor-DB/MyClients";
import Preferences from "./Accessor-DB/Preferences";
import Assessments from "./Accessor-DB/Assessments";
import Assessmentsone from "./Accessor-DB/Assessmentsone";
import ContactInfo from "./Accessor-DB/ContactInfo";

const MainLayout = ({ children }) => (
    <div className="accessor-app">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
  
  const NoSidebarLayout = ({ children }) => (
    <div className="accessor-app no-sidebar">
      <div className="content">{children}</div>
    </div>
  );
  
  const AccessorApp2 = () => {
    return (
      <Routes>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
  <Route
          path="/live-jobs"
          element={
            <MainLayout>
              <LiveJobs />
            </MainLayout>
          }
        />
 <Route
          path="/my-quotes"
          element={
            <MainLayout>
              <MyQoutes />
            </MainLayout>
          }
        />
         <Route
          path="/my-clients"
          element={
            <MainLayout>
              <MyClients />
            </MainLayout>
          }
        />
   <Route
          path="/preferences"
          element={
            <MainLayout>
              <Preferences />
            </MainLayout>
          }
        />
         <Route
          path="/assessments"
          element={
            <MainLayout>
              <Assessments />
            </MainLayout>
          }
        />
         <Route
          path="/assessment/:id"
          element={
            <MainLayout>
              <Assessmentsone />
            </MainLayout>
          }
        />

<Route
          path="/contacts"
          element={
            <NoSidebarLayout>
              <ContactInfo />
            </NoSidebarLayout>
          }
        />

        <Route
          path="/quote/:jobId" 
          element={
            <NoSidebarLayout>
              <Quote />
              </NoSidebarLayout>
          }
        />
        <Route
          path="/date/:jobId"
          element={
            <NoSidebarLayout>
              <DatePickerComponent />
            </NoSidebarLayout>
          }
        />
      </Routes>
    );
  };
  

export default AccessorApp2;

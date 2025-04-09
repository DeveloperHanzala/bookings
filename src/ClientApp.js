import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientSidebar from "./Client-DB/ClientSidebar";
import ClientDashboard from "./Client-DB/ClientDashboard";
import Buildings from "./Client-DB/Buildings";
import BERcerti from "./Client-DB/BERcerti";
import DatePickerC from "./Client-DB/certificate form/DatePickerC";
import ClientCerti from "./Client-DB/certificate form/ClientCeri";
import Certificate from "./Client-DB/Certificate";
import YourQuoutes from "./Client-DB/YourQuoutes";
import Main from "./Checkout/Main";
import Cancel from "./Checkout/Cancel";
import Success from "./Checkout/Success";
import Assessmentsone from "./Client-DB/AssessmentView/Assessmentsone";
// import LiveJobs from "./Pages/LiveJobs";
// import MyQuotes from "./Pages/MyQuotes";
// import MyClients from "./Pages/MyClients";
// import Preferences from "./Pages/Preferences";
// import Assessments from "./Pages/Assessments";

const MainLayout = ({ children }) => (
    <div className="accessor-app">
      <ClientSidebar />
      <div className="content">{children}</div>
    </div>
  );
  
  const NoSidebarLayout = ({ children }) => (
    <div className="accessor-app no-sidebar">
      <div className="content">{children}</div>
    </div>
  );
  
  const ClientApp = () => {
    return (
      <Routes>
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <ClientDashboard />
            </MainLayout>
          }
        />
        <Route
          path="/view-assessment/:assessmentId"
          element={
            <MainLayout>
              <Assessmentsone />
            </MainLayout>
          }
        />
  <Route
          path="/buildings"
          element={
            <MainLayout>
              <Buildings />
            </MainLayout>
          }
        />
 <Route
          path="/ber-certificate"
          element={
            <MainLayout>
              <BERcerti />
            </MainLayout>
          }
        />
  
  <Route
          path="/get-your-certificate"
          element={
            <MainLayout>
              <Certificate />
            </MainLayout>
          }
        />
    

    <Route
          path="/your-quote"
          element={
            <NoSidebarLayout>
              <YourQuoutes />
            </NoSidebarLayout>
          }
        />
        <Route
          path="/date/:jobId"
          element={
            <NoSidebarLayout>
              <ClientCerti />
            </NoSidebarLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <NoSidebarLayout>
              <Main />
            </NoSidebarLayout>
          }
        />
        <Route
          path="/Cancel"
          element={
            <NoSidebarLayout>
              <Cancel />
            </NoSidebarLayout>
          }
        />
        <Route
          path="/Success"
          element={
            <NoSidebarLayout>
              <Success />
            </NoSidebarLayout>
          }
        />
      </Routes>
    );
  };
  

export default ClientApp;




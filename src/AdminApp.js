import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminSidebar from "./Admin/AdminSidebar";
import AdminClients from "./Admin/AdminClients";
import ClientProfile from "./Admin/ClientProfile";
import BERMembers from "./Admin/BERMembers";
import BerMembercerti from "./Admin/BerMembercerti";
import ActiveJobs from "./Admin/ActiveJobs";
import Payments from "./Admin/Payments";
import Financial from "./Admin/Financial";


const MainLayout = ({ children }) => (
  <div className="accessor-app">
    <AdminSidebar />
    <div className="content">{children}</div>
  </div>
);

const AdminApp = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <AdminDashboard />
          </MainLayout>
        }
      />
      <Route
        path="/clients"
        element={
          <MainLayout>
            <AdminClients />
          </MainLayout>
        }
      />
      <Route
        path="/ber-members"
        element={
          <MainLayout>
            <BERMembers />
          </MainLayout>
        }
      />
      <Route
        path="/active-jobs"
        element={
          <MainLayout>
            <ActiveJobs />
          </MainLayout>
        }
      />
      <Route
        path="/payments"
        element={
          <MainLayout>
            <Payments />
          </MainLayout>
        }
      />
      <Route
        path="/finance"
        element={
          <MainLayout>
            <Financial />
          </MainLayout>
        }
      />
      <Route
        path="/client-profile/:id"
        element={
          <MainLayout>
            <ClientProfile />
          </MainLayout>
        }
      />
      <Route
        path="/ber-member-certificate"
        element={
          <MainLayout>
            <BerMembercerti />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AdminApp;

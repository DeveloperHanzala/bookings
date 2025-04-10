import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./MainApp";
import AccessorApp2 from "./AccessorApp2";
import ClientApp from "./ClientApp";
import AdminApp from "./AdminApp";
import Blog from './Pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/accessor/*" element={<AccessorApp2 />} />
        <Route path="/client/*" element={<ClientApp />} />
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

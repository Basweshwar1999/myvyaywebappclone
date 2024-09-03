import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Updated imports
import LoginPage from './Component/Code/Login';
import Dashboard from './Component/Code/Dashboard';
import CreateTravelReq from './Component/Code/CreateTravelReq';
import CreGenReq from './Component/Code/CreGenReq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CreateTravelReq" element={<CreateTravelReq />} />
        <Route path="/CreGenReq" element={<CreGenReq />} />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Replaces Redirect */}
      </Routes>
    </Router>
  );
}

export default App;

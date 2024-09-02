import React from 'react';
import Sidebar from './Sidebar';
import StatusCard from './StatusCard';
import TabsComponent from './TabsComponent';
import '../Styles/Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="status-cards">
          <StatusCard title="Request settled" count="0" icon="✓" color="#27ae60" />
          <StatusCard title="Request pending" count="1" icon="⌛" color="#f39c12" />
          <StatusCard title="Request rejected" count="0" icon="✖" color="#e74c3c" />
          <StatusCard title="Request Approved" count="0" icon="@" color="#e74cdw2" />

        </div>
        <TabsComponent />
      </div>
    </div>
  );
};

export default Dashboard;

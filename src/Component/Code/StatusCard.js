import React from 'react';
import '../Styles/StatusCard.css'; // Assuming you have a CSS file for styling

const StatusCard = ({ title, count, icon, color }) => {
  return (
    <div className="status-card" style={{ borderColor: color }}>
      <div className="status-icon">{icon}</div>
      <div className="status-info">
        <h4>{title}</h4>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default StatusCard;

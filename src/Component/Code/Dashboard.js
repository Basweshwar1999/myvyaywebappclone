import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import StatusCard from './StatusCard';
import TabsComponent from './TabsComponent';
import '../Styles/Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  // State to store API response
  const [requestDetails, setRequestDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchRequestDetails = async () => {
      try {
        const token = localStorage.getItem('token'); // Replace 'authToken' with the actual key used in your app
        
        if (!token) {
          throw new Error('No token found in local storage');
        }
        const response = await fetch('http://localhost:59144/GetUserRequestDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: 255,
            token:token,
          }),
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("satish____________",data)
        setRequestDetails(data.result); // Store the API response in state
      } catch (error) {
        setError(error.message); // Store error message if there's an issue
      } finally {
        setLoading(false); // Set loading to false after API call is complete
      }
    };

    fetchRequestDetails(); // Call the function when component mounts
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="status-cards">
          {/* Render status cards with data from API response */}
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && requestDetails && (
            <>
              <StatusCard title="Request settled" count={requestDetails.noOfRequestSettled || 0} icon="✓" color="#27ae60" />
              <StatusCard title="Request pending" count={requestDetails.noOfRequestPending || 0} icon="⌛" color="#f39c12" />
              <StatusCard title="Request rejected" count={requestDetails.noOfRequestRejected || 0} icon="✖" color="#e74c3c" />
              <StatusCard title="Request Raised" count={requestDetails.noOfRequestRaised || 0} icon="@" color="#e74cdw2" />
            </>
          )}
        </div>
        <TabsComponent />
      </div>
    </div>
  );
};

export default Dashboard;

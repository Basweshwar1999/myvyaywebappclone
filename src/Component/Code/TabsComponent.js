import React, { useState, useEffect } from 'react';
import '../Styles/TabsComponent.css'; // Assuming you have a CSS file for styling

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('post-travel');
  const [travelRequests, setTravelRequests] = useState([]);
  const [generalExpenses, setGeneralExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      // Retrieve token from local storage
      const token = localStorage.getItem('token');

      if (!token) {
        setError('No token found in local storage');
        setLoading(false);
        return;
      }

      try {
        if (activeTab === 'post-travel') {
          const travelResponse = await fetch('http://13.126.125.20:8091/PreTravel', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ExpenseType: 1,
              ExpenseForApproval: 'false',
              Role: 'Employee',
              UserId: 255,
              token: token,
            }),
          });

          if (!travelResponse.ok) {
            throw new Error('Network response was not ok for travel requests');
          }

          const travelData = await travelResponse.json();
          console.log("Travel Data:", travelData);

          setTravelRequests(travelData.result); // Store travel requests in state
        }

        if (activeTab === 'general-expense') {
          const generalResponse = await fetch('http://13.126.125.20:8091/GeneralExpenses', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ExpenseType: 1,
              ExpenseForApproval: 'false',
              Role: 'Employee',
              UserId: 255,
              token: token,
            }),
          });

          if (!generalResponse.ok) {
            throw new Error('Network response was not ok for general expenses');
          }

          const generalData = await generalResponse.json();
          console.log("General Expenses Data:", generalData);

          setGeneralExpenses(generalData.result); // Store general expenses in state
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call fetchData when activeTab changes
  }, [activeTab]); // Dependency array includes activeTab

  return (
    <div className="tabs-component">
      <div className="tabs">
        <button className={activeTab === 'post-travel' ? 'active' : 'inactive'} onClick={() => handleTabChange('post-travel')}>
          Travel Request
        </button>
        <button className={activeTab === 'general-expense' ? 'active' : 'inactive'} onClick={() => handleTabChange('general-expense')}>
          General Expense
        </button>
      </div>

      <div className="tab-content">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {activeTab === 'post-travel' && (
          <div>
            <h2>Travel Requests</h2>
            <table>
              <thead>
                <tr>
                  <th>Expense ID</th>
                  <th>Request Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {travelRequests.map((request, index) => (
                  <tr key={index}>
                    <td>{request.expenseCode}</td>
                    <td>{request.expenseName}</td>
                    <td>{request.expenseStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'general-expense' && (
          <div>
            <h2>General Expenses</h2>
            <table>
              <thead>
                <tr>
                  <th>Expense ID</th>
                  <th>Request Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {generalExpenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.expenseCode}</td>
                    <td>{expense.expenseName}</td>
                    <td>{expense.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;

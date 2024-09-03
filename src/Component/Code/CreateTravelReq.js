import React, { useState } from 'react';
import '../Styles/TabsComponent.css'; // Ensure you have a CSS file for styling

const CreateTravelReq = () => {
  const [requestFor, setRequestFor] = useState('Self');
  const [requestTitle, setRequestTitle] = useState('');
  const [travelType, setTravelType] = useState('Domestic');
  const [currency, setCurrency] = useState('INR');
  const [currencyRate, setCurrencyRate] = useState(1.0);

  return (
    <div className="travel-request">
      {/* {/ Header Section /} */}
      <div className="header">
        <h1>Travel Request</h1>
        <div className="request-for">
          <label htmlFor="requestFor">Request For</label>
          <select id="requestFor" value={requestFor} onChange={(e) => setRequestFor(e.target.value)}>
            <option value="Self">Self</option>
            {/* {/ Add more options if needed /} */}
          </select>
        </div>
      </div>

      {/* {/ Employee Details Section /} */}
      <div className="section employee-details">
        <h2>Employee Details</h2>
        <div className="details-grid">
          <div><strong>Employee Id:</strong> Emp00123</div>
          <div><strong>Designation:</strong> Employee(EE)</div>
          <div><strong>First Name:</strong> Employee</div>
          <div><strong>Last Name:</strong> Dummy</div>
          <div><strong>Email Id:</strong> mailto:shruti.test@botmaticsolution.in</div>
          <div><strong>Mobile No:</strong> 91-8530617353</div>
        </div>
      </div>

      {/* {/ Travel Details Section /} */}
      <div className="section travel-details">
        <h2>Travel Details</h2>
        <div className="details-grid">
          <div className="field">
            <label htmlFor="requestTitle">Request Title *</label>
            <input
              type="text"
              id="requestTitle"
              value={requestTitle}
              onChange={(e) => setRequestTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="travelType">Travel Type *</label>
            <select
              id="travelType"
              value={travelType}
              onChange={(e) => setTravelType(e.target.value)}
            >
              <option value="Domestic">Domestic</option>
              <option value="International">International</option>
              {/* {/ Add more options if needed /} */}
            </select>
          </div>
          <div className="field">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              {/* {/ Add more currency options if needed /} */}
            </select>
          </div>
          <div className="field">
            <label htmlFor="currencyRate">Currency Rate</label>
            <input
              type="number"
              id="currencyRate"
              value={currencyRate}
              onChange={(e) => setCurrencyRate(e.target.value)}
            />
          </div>
        </div>
        <button className="add-location">Add Location</button>
      </div>
    </div>
  );
};

export default CreateTravelReq;

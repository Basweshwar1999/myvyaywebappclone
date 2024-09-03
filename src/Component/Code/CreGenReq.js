import React, { useState } from 'react';
import '../Styles/Dashboard.css'; // Assuming you have a CSS file for styling

const CreGenReq = ({ onClose, onSave }) => {
  const [expenseType, setExpenseType] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [expenseDate, setExpenseDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
  const [justification, setJustification] = useState('');
  const [totalExpense, setTotalExpense] = useState('');

  const handleSave = () => {
    if (!expenseType || !vendorName || !expenseDate || !justification || !totalExpense) {
      alert('Please fill all required fields.');
      return;
    }

    const expenseData = {
      expenseType,
      vendorName,
      expenseDate,
      justification,
      totalExpense,
    };

    onSave(expenseData); // Callback to handle save
    onClose(); // Close modal after saving
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 style={{color:'black' ,width:'100%'}}>Add Expense</h2>
          <button onClick={onClose} className="close-button">X</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label style={{color:'black'}}>Expense Type *</label>
            <select value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
              <option value="">--Select Expense Type--</option>
              <option value="Travel">Travel</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Meals">Meals</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label style={{color:'black'}}>Vendor Name *</label>
            <input
              type="text"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label style={{color:'black'}}>Expense Date *</label>
            <input
              type="date"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label style={{color:'black'}}>Justification *</label>
            <input
              type="text"
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label style={{color:'black'}}>Total Expense Amount *</label>
            <input
              type="number"
              value={totalExpense}
              onChange={(e) => setTotalExpense(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleSave} className="add-expense-button">Add Expense</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreGenReq;

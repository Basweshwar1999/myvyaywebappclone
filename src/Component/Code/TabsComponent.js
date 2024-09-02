import React, { useState } from 'react';
import '../Styles/TabsComponent.css'; // Assuming you have a CSS file for styling

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('post-travel');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-component">
      <div className="tabs">
        <button className={activeTab === 'post-travel' ? 'active' : 'inactive'} onClick={() => handleTabChange('post-travel')}>
          Post Travel
        </button>
        <button className={activeTab === 'general-expense' ? 'active' : 'inactive'} onClick={() => handleTabChange('general-expense')}>
          General Expense
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'post-travel' && <div>Post Travel Content</div>}
        {activeTab === 'general-expense' && <div>General Expense Content</div>}
      </div>
    </div>
  );
};

export default TabsComponent;

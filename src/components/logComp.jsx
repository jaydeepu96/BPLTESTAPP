import React, { useState } from 'react';
import '../css/LogComp.css'; 

function LogComp() {
  const [activeTab, setActiveTab] = useState('live');

  const renderContent = () => {
    switch (activeTab) {
      case 'live':
        return <p>This is the Live tab content with some dummy paragraph.</p>;
      case 'activityLog':
        return <p>This is the Activity Log tab content with some dummy paragraph.</p>;
      case 'similarItems':
        return <p>This is the Similar Items tab content with some dummy paragraph.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="log-comp" style={{ width: "25%", height: "67vh" ,}}>
      <div className="tabs" >
        <button onClick={() => setActiveTab('live')} className={activeTab === 'live' ? 'active' : ''}>Live</button>
        <button onClick={() => setActiveTab('activityLog')} className={activeTab === 'activityLog' ? 'active' : ''}>Activity Log</button>
        <button onClick={() => setActiveTab('similarItems')} className={activeTab === 'similarItems' ? 'active' : ''}>Similar Items</button>
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default LogComp;

import React, { useState } from 'react';
import PositionForm from './components/PositionForm';
import RoleForm from './components/RoleForm';
import ActivityForm from './components/ActivityForm';
import SideBar from './components/sidebar';
import MainContainer from './components/mainContainer';
const App = () => {
  const [activeTab,setAciveTab] = useState("positions")


  return (
    <div style={{display:"flex",justifyContent:'space-between'}}>
  
      <SideBar setAciveTab={setAciveTab} activeTab={activeTab}/>
      <MainContainer activeTab={activeTab}/>
    </div>
  );
};

export default App;

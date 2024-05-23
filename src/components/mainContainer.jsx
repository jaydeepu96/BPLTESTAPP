import React, { useState } from "react";
import Search from "./search";
import ContentComp from "./contentComp";
import LogComp from "./logComp";

function MainContainer({ activeTab }) {
  const [ selectedSearch,setSelectedSearch] =useState(0)
  return (
    <div style={{display:"flex",width:"85%",justifyContent:"space-between"}}>
      <Search activeTab={activeTab} selectedSearch={selectedSearch} setSelectedSearch={setSelectedSearch} />
      <ContentComp activeTab={activeTab} selectedSearch={selectedSearch} />
      <LogComp activeTab={activeTab} />
    </div>
  );
}

export default MainContainer;

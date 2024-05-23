import React from "react";
import "../css/SideBar.css";
function SideBar({ setAciveTab, activeTab }) {
  const handelSelection = (data) => {
    setAciveTab(data);
  };
  const sideBarData = ["positions", "roles", "activities"];
  return (
    <div className="sidebar">
      <h4>RAFC</h4>
      <ul>
        {sideBarData.map((item, index) => (
          <li
            key={index}
            onClick={() => handelSelection(item)}
            className={`sidebar-item ${item} ${
              activeTab === item ? "active_sidebar" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;

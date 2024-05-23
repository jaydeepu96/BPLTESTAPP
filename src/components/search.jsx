import React, { useState } from "react";
import "../css/Search.css";
import { roles, positions, activities } from "../data";

const dataMapping = {
  positions: positions,
  roles: roles,
  activities: activities,
};

function Search({ activeTab, selectedSearch, setSelectedSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const data = dataMapping[activeTab];

  const filteredData = data.filter(
    (item) =>
      (item.label || item.description).toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id === selectedSearch
  );

  return (
    <div className="search_main_container">
      <div className="serch_box">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredData &&
        filteredData.map((item, index) => (
          <div
            key={index}
            className={`search_card search_card_border ${
              item.id === selectedSearch ? "active_search_card" : ""
            }`}
            onClick={() => setSelectedSearch(item.id)}
          >
            <p>{item.label || item.description}</p>
            <p className="search_id">{item.id}</p>
          </div>
        ))}
    </div>
  );
}

export default Search;

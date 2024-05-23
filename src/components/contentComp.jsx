import React, { useEffect, useState } from "react";
import ActivityForm from "./ActivityForm";
import PositionForm from "./PositionForm";
import RoleForm from "./RoleForm";
import { roles, positions, activities } from "../data";
import "../css/content.css";

const dataMapping = {
  positions: positions,
  roles: roles,
  activities: activities,
};

function ContentComp({ activeTab, selectedSearch }) {
  const [content, setContent] = useState(null);
  const data = dataMapping[activeTab];

  useEffect(() => {
    const selectedContent = data.find((item) => item.id === selectedSearch);
    setContent(selectedContent);
  }, [selectedSearch, data]);

  return (
    <div className="content_container">
      <div>
        {activeTab === "positions" && (
          <PositionForm selectedContent={content} />
        )}
      </div>
      <div>
        {activeTab === "roles" && <RoleForm selectedContent={content} />}
      </div>
      <div>
        {activeTab === "activities" && (
          <ActivityForm selectedContent={content} />
        )}
      </div>
    </div>
  );
}

export default ContentComp;

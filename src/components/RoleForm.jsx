import React, { useState, useEffect } from "react";
import "../css/Position.css";
const RoleForm = ({ selectedContent }) => {
  const [form, setForm] = useState({
    roleId: "",
    roleLabel: "",
    roleDescription: "",
    assignedActivities: [],
  });

  useEffect(() => {
    if (selectedContent) {
      setForm({
        roleId: selectedContent.id,
        roleLabel: selectedContent.label,
        roleDescription: selectedContent.description,
        assignedActivities: selectedContent.assignedActivities || [],
      });
    }
  }, [selectedContent]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleRoleChange = (roleId) => {
    setForm((prevForm) => {
      const updatedRoles = prevForm.assignedRoles.includes(roleId)
        ? prevForm.assignedRoles.filter((id) => id !== roleId)
        : [...prevForm.assignedRoles, roleId];
      return { ...prevForm, assignedRoles: updatedRoles };
    });
  };

  return (
    <div className="position_form_container">
      <form onSubmit={handleSubmit} className="position-form">
        <div className="form-row">
          <label htmlFor="roleId">Role ID:</label>
          <input
            type="text"
            name="roleId"
            placeholder="Role id"
            value={form.roleId}
            readOnly
          />
        </div>
        <div className="form-row">
          <label htmlFor="roleLabel">Role Label:</label>
          <input
            type="text"
            name="roleLabel"
            placeholder="Role label"
            maxLength="100"
            value={form.roleLabel}
            onChange={handleRoleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="roleDescription">Role Description:</label>
          <textarea
            name="proleDescription"
            placeholder="Role description"
            maxLength="500"
            value={form.roleDescription}
            onChange={handleRoleChange}
          ></textarea>
        </div>

        <div className="role_container" style={{ height: "500px" }}>
          <div className="role_text">Activities</div>
          <button className="role_btn">Add Activities</button>
        </div>
      </form>
    </div>
  );
};

export default RoleForm;

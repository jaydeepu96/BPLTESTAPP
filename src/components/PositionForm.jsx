import React, { useState, useEffect } from "react";
import "../css/Position.css";

const PositionForm = ({ selectedContent }) => {
  const [positions, setPositions] = useState([]);
  const [roles, setRoles] = useState([]);
  const [mdos, setMdos] = useState([]);
  const [form, setForm] = useState({
    positionId: "",
    positionLabel: "",
    positionDescription: "",
    mdo: "",
    assignedRoles: [],
  });

  useEffect(() => {
    if (selectedContent) {
      setForm({
        positionId: selectedContent.id,
        positionLabel: selectedContent.label,
        positionDescription: selectedContent.description,
        mdo: selectedContent.department || "",
        assignedRoles: selectedContent.assignedRoles || [],
      });
    }
  }, [selectedContent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRoleChange = (roleId) => {
    setForm((prevForm) => {
      const updatedRoles = prevForm.assignedRoles.includes(roleId)
        ? prevForm.assignedRoles.filter((id) => id !== roleId)
        : [...prevForm.assignedRoles, roleId];
      return { ...prevForm, assignedRoles: updatedRoles };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the backend
    console.log(form);
  };

  return (
    <div className="position_form_container">
      <form onSubmit={handleSubmit} className="position-form">
        <div className="form-row">
          <label htmlFor="positionId">Position ID:</label>
          <input
            type="text"
            name="positionId"
            placeholder="position id"
            value={form.positionId}
            readOnly
          />
        </div>
        <div className="form-row">
          <label htmlFor="positionLabel">Position Label:</label>
          <input
            type="text"
            name="positionLabel"
            placeholder="position label"
            maxLength="100"
            value={form.positionLabel}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="positionDescription">Position Description:</label>
          <textarea
            name="positionDescription"
            placeholder="position description"
            maxLength="500"
            value={form.positionDescription}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="mdo">Ministry Department Organisation (MDO):</label>
          <select name="mdo" id="mdo" value={form.mdo} onChange={handleChange}>
            <option value={form.mdo}>{form.mdo}</option>
            {mdos.map((mdo) => (
              <option key={mdo.id} value={mdo.name}>
                {mdo.name}
              </option>
            ))}
          </select>
        </div>
        <div className="role_container">
          <div className="role_text">Roles</div>
          <button className="role_btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default PositionForm;

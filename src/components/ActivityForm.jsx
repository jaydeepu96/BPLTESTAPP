import React, { useState, useEffect } from 'react';
import '../css/Position.css';

const ActivityForm = ({ selectedContent }) => {
  const [form, setForm] = useState({
    activityId: '',
    activityDescription: ''
  });

  useEffect(() => {
    if (selectedContent) {
      setForm({
        activityId: selectedContent.id,
        activityDescription: selectedContent.description || ''
      });
    }
  }, [selectedContent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the backend
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="activity-form">
      <div className="form-row">
        <label htmlFor="activityId">Activity ID:</label>
        <input type="text" name="activityId" placeholder='Activity id' value={form.activityId} readOnly />
      </div>
      <div className="form-row">
        <label htmlFor="activityDescription">Activity Description:</label>
        <textarea name="activityDescription" placeholder='Activity description' value={form.activityDescription} onChange={handleChange}></textarea>
      </div>
  
    </form>
  );
};

export default ActivityForm;

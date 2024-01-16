import React, { useState } from 'react';

const DepartmentForm = ({ onSubmit }) => {
  const [department, setDepartment] = useState({ code: '', name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((prevDepartment) => ({ ...prevDepartment, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(department);
    setDepartment({ code: '', name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Department Code:
        <input type="text" name="code" value={department.code} onChange={handleChange} />
      </label>
      <label>
        Department Name:
        <input type="text" name="name" value={department.name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DepartmentForm;

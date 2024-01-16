import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit }) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    salary: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
    setEmployee({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      salary: '',
      department: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Similar structure as DepartmentForm with additional fields */}
    </form>
  );
};

export default EmployeeForm;

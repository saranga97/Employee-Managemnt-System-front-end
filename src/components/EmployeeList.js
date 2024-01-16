import React from 'react';

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          {employee.firstName} {employee.lastName} - {employee.email}
          <button onClick={() => onDelete(employee.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;

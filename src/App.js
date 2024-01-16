import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import DepartmentForm from './components/DepartmentForm';
import DepartmentList from './components/DepartmentList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import { getDepartments, addDepartment, deleteDepartment, getEmployees, addEmployee, deleteEmployee } from './services/apiService';

const App = () => {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchDepartments();
    fetchEmployees();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const addNewDepartment = async (newDepartment) => {
    try {
      await addDepartment(newDepartment);
      fetchDepartments();
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  const deleteDepartmentById = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments();
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const addNewEmployee = async (newEmployee) => {
    try {
      await addEmployee(newEmployee);
      fetchEmployees();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const deleteEmployeeById = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/employees">Employees</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/departments" element={
            <div>
              <h2>Departments</h2>
              <DepartmentForm onSubmit={addNewDepartment} />
              <DepartmentList departments={departments} onDelete={deleteDepartmentById} />
            </div>
          } />
          <Route path="/employees" element={
            <div>
              <h2>Employees</h2>
              <EmployeeForm onSubmit={addNewEmployee} />
              <EmployeeList employees={employees} onDelete={deleteEmployeeById} />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

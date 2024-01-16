import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const getDepartments = () => apiService.get('/departments');
export const addDepartment = (department) => apiService.post('/departments', department);
export const deleteDepartment = (id) => apiService.delete(`/departments/${id}`);

export const getEmployees = () => apiService.get('/employees');
export const addEmployee = (employee) => apiService.post('/employees', employee);
export const deleteEmployee = (id) => apiService.delete(`/employees/${id}`);

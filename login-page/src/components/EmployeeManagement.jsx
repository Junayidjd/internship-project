// EmployeeManagement.jsx
import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import CreateEmployee from './CreateEmployee';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Hukum Gupta', email: 'hcgupta@cstech.in', mobile: '954010044', designation: 'HR', gender: 'Male', course: 'MCA', image: 'https://via.placeholder.com/50', createDate: '2021-02-13', active: true },
    { id: 2, name: 'Manish', email: 'manish@cstech.in', mobile: '954010033', designation: 'Sales', gender: 'Male', course: 'BCA', image: 'https://via.placeholder.com/50', createDate: '2021-02-12', active: true },
    { id: 3, name: 'Yash', email: 'yash@cstech.in', mobile: '954010022', designation: 'Manager', gender: 'Male', course: 'BSC', image: 'https://via.placeholder.com/50', createDate: '2021-02-11', active: false },
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...newEmployee, id: prevEmployees.length + 1, createDate: new Date().toISOString().split('T')[0] }
    ]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/create-employee">
          <CreateEmployee addEmployee={addEmployee} />
        </Route>
        <Route path="/employees">
          <EmployeeList employees={employees} setEmployees={setEmployees} />
        </Route>
        <Route path="/" exact>
          <h2>Welcome to Employee Management</h2>
        </Route>
      </Switch>
    </Router>
  );
};

export default EmployeeManagement;
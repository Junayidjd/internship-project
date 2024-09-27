import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const savedEmployees = localStorage.getItem('employees');
  const initialEmployees = savedEmployees ? JSON.parse(savedEmployees) : [
    { id: 1, name: 'Hukum Gupta', email: 'hcgupta@cstech.in', mobile: '954010044', designation: 'HR', gender: 'Male', course: ['MCA'], image: 'https://via.placeholder.com/50', createDate: '2021-02-13', active: true },
    { id: 2, name: 'Manish', email: 'manish@cstech.in', mobile: '954010033', designation: 'Sales', gender: 'Male', course: ['BCA'], image: 'https://via.placeholder.com/50', createDate: '2021-02-12', active: true },
    { id: 3, name: 'Yesh', email: 'myesh@cstech.in', mobile: '954010022', designation: 'Manager', gender: 'Male', course: ['BSC'], image: 'https://via.placeholder.com/50', createDate: '2021-02-12', active: true },
    { id: 4, name: 'abhishek', email: 'abhishek@cstech.in', mobile: '954010033', designation: 'HR', gender: 'Male', course: ['MCA'], image: 'https://via.placeholder.com/50', createDate: '13-feb-21', active: true },
  ];

  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [
      ...employees,
      { ...newEmployee, id: employees.length + 1, createDate: new Date().toLocaleDateString() }
    ];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Save to local storage
  };

  const editEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(emp => 
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );
    setEmployees(updatedEmployees); // Update state
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Update local storage
  };

  const deleteEmployee = (id) => {
    console.log("Deleting employee with id:", id);
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    console.log("Updated employee list:", updatedEmployees);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };
  
  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, editEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

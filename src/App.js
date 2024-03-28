
import React from 'react';
import './App.css'; // Importing CSS file for global styles
import EmployeeManagement from './employee'; // Importing the EmployeeManagement component
// import './employeeList1.css'; 
import employeesData from './employeeList.js'
function App() {
  return (
    <div className="App">
      <EmployeeManagement employees={employeesData} />
    </div>
  );
}

export default App;

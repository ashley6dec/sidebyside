import React, { useState } from 'react';
import employeesData from './employeeList.js'; // Importing the data file
import './employeeList1.css'; 

const EmployeeManagement = ({ employees }) => {
  const [team, setTeam] = useState([]);
  const [sortByAge, setSortByAge] = useState(false);

  const addEmployeeToTeam = (employee) => {
    const newTeam = [...team, employee];
    setTeam(newTeam);
  };

  const removeEmployeeFromTeam = (index) => {
    const updatedTeam = [...team];
    updatedTeam.splice(index, 1);
    setTeam(updatedTeam);
  };

  const calculateAverageAge = () => {
    const totalAge = team.reduce((acc, emp) => acc + emp.age, 0);
    return team.length > 0 ? totalAge / team.length : 0;
  };

  const toggleSortByAge = () => {
    setSortByAge(!sortByAge);
    if (sortByAge) {
      setTeam([...team.sort((a, b) => a.age - b.age)]);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>All Employees</h2>
        <ul>
          {employees.map((employee, index) => (
            <li key={index} className={!team.includes(employee) ? 'enabled' : 'disabled'}>
              {employee.name} - {employee.age} years
              {!team.includes(employee) && (
                <button onClick={() => addEmployeeToTeam(employee)} disabled={team.includes(employee)}>Add</button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="box">
        <h2>Team Members</h2>
        <p>Average Age: {calculateAverageAge()} years</p>
        <button onClick={toggleSortByAge}>Sort By Age</button>
        <ul>
          {team.map((employee, index) => (
            <li key={index}>
              {employee.name} - {employee.age} years
              <button onClick={() => removeEmployeeFromTeam(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeManagement;
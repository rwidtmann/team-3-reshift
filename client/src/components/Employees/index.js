import React from 'react';


const EmployeeList = ({ employees }) => {

  return (
    <div>
      <p className="adminTop"> .
      </p>

      <div className='adminBody'>
        <div>
          <h2>Employee Roster:</h2>
        </div>

        {employees &&
          employees.map((employee) => (
            <div key={employee.name} className="card mb-3">
              <h4 className="card-header bg-secondary text-dark p-2 m-0">
                Name: {employee.name} <br />
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default EmployeeList
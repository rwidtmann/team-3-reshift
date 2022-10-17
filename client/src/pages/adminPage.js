import React from 'react';
// import { Link } from 'react-router-dom';
import EmployeeList from '../components/Employees';
import '../styles/app.css';
import { useQuery } from '@apollo/client';
import { QUERY_EMPLOYEES } from '../utils/queries';

const AdminPage = () => {

  const { loading, data} = useQuery(QUERY_EMPLOYEES);
  const employees = data?.employees || [];

  return (
    <main>
    <div className="flex-row justify-center bg-dark homeLogin">
      <div className="col-12 col-md-8 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <EmployeeList
            employees={employees}
            title="Some Feed for Thought(s)..."
          />
        )}
      </div>
    </div>
  </main>
  );
};

export default AdminPage;


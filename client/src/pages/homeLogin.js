import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../styles/app.css';



const Home = () => {
  const [formState, setFormState] = useState({ name: '', password: '', action: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  

  // eslint-disable-next-line
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    console.log(`The Event Target Value: ${event.target.value}`)
    try {
      const { data } = await login ({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      if (formState.action === 'clockIn') {
        navigate('/startShift');
      } else if (formState.action === 'clockOut') {
        navigate('/endShift');
      } else {
        console.log("Invalid user action");
      }
      
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: '',
      password: '',
      action: ''
    });
  };


  // Will need login box(entail: employeeId and PIN) and 2 buttons: clock in and clock out. Clock out will only work if user is clocked in - if not clock out will display prompt.
  // Bottom with have an admin button that will prompt sign in and will redirect to admin page with employee queries that will display all employees and an "addEmployee" and "removeEmployee" functions
  return (

    <div className="card text-white bg-dark text-light d-flex justify-content-center align-items-center homeLogin">
      <div className="card-body cardBody">
        <p className="card-text text-center">Please Enter Your Employee Id and Password To Clock In</p>
        <div>
          <div className="card-header bg-dark text-center h2head">
            <h2>Welcome to Work!</h2>
          </div>
          <form className='formText' onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Employee ID"
              name="name"
              type="name"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder='Password'
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <button
              className="btn clockBtn btn-primary btn-md"
              style={{ cursor: 'pointer' }}
              type="submit"
              onClick={() => setFormState({...formState, action: 'clockIn'})}
            >
              Clock In
            </button>
            <br></br>
            <button
              className="btn clockBtn btn-secondary btn-md"
              style={{ cursor: 'pointer' }}
              type="submit"
              onClick={() => setFormState({...formState, action: 'clockOut'})}
            >
              Clock Out
            </button>
          </form>

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>

        <div className='cdBtn'>
          {/* Create Employee Button */}
          <Link className="btn btn-md bg-success btn-info m-2" to="/createEmployee">
          Create Employee (+)
         </Link>
        
          {/* Delete Employee Button */}
          <Link className="btn btn-md bg-danger btn-info m-2" to="/deleteEmployee">
          Delete Employee (-)
          </Link>
        </div>

      </div>
    </div>

  );
};

export default Home;


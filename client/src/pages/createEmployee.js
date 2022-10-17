import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { useNavigate } from 'react-router-dom';

import { ADD_EMPLOYEE } from '../utils/mutations';
import '../styles/app.css';


const CreateEmployee = () => {

  // const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    password: ''
  });

  const [success, setSuccess] = useState(false)
  
  const [addEmployee, { error }] = useMutation(ADD_EMPLOYEE);
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      addEmployee({ variables: { ...formState }, });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      name: '',
      password: '',
    });
  };

  // clear form values



  return (
    <div className="card text-white bg-dark text-light d-flex justify-content-center align-items-center adminLogin">
      <br></br>
      <div className="card-body" id='gator'>
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
            className="btn btn-block btn-primary"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            +
          </button>
        </form>
        {success && (
          <div className="my-3 p-3 bg-success text-white">
            Employee has successfully been created!
          </div>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </div>
  )
}

export default CreateEmployee;
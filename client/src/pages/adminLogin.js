import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import '../styles/app.css';



const AdminLogin = () => {

    const navigate = useNavigate();

    const [formState, setPassword] = useState({ password: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPassword({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        const adminPass = "123456"
        event.preventDefault();

        if (formState.password === adminPass) {
            navigate('/adminPage')
        } else {
            alert("Invalid password")
        }
    }


    return (
        <div className="card text-white bg-dark text-light d-flex justify-content-center vh-100 align-items-center adminLogin">
            <div className="card-body">
                    <div className="card-header bg-dark text-center">
                        <h2>Admin sign in!</h2>
                    </div>
                    <form className='formText' onSubmit={handleSubmit}>
                        <input
                            className="form-input"
                            placeholder='PIN'
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <input type="submit" />
                        <br></br>
                    </form>
                </div>
            </div>
    );
};

export default AdminLogin;
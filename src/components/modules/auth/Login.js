import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log(input);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', input)
            .then(res => {
                console.log(res.data);
                // Handle successful login, such as saving tokens or redirecting
            })
            .catch(error => {
                console.error('Login failed:', error.response ? error.response.data : error.message);
                // Handle errors, like displaying a message to the user
            });
    };

    return (
        <div className='container-fluid vh-100 d-flex justify-content-center align-items-center'>
            <div className='row w-100'>
                <div className='col-md-6 mx-auto'>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <h4>Login</h4>
                        </div>
                        <div className='card-body'>
                            <label className='w-100'>
                                <p>Email/Phone</p>
                                <input className='form-control' type={'text'} name={'email'} value={input.email || ''} onChange={handleInput} />
                            </label>

                            <label className='w-100'>
                                <p>Password</p>
                                <input className='form-control' type={'password'} name={'password'} value={input.password || ''} onChange={handleInput} />
                            </label>

                            <div className='d-grid mt-4'>
                                <button onClick={handleLogin} className={'btn btn-outline-success'}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

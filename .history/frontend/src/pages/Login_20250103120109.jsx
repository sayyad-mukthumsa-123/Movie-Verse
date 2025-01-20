import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error('Please provide a valid email.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/login',
            // const response = await fetch('https://movieverse-backend.onrender.com/login',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Email: email, Password: password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Sign in successful:', data);
                localStorage.setItem('token', data.token); // Save token to local storage
                navigate('/home_login');
                toast.success('Sign in successful!');
            } else {
                toast.error(data.msg || 'Invalid email or password.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h1 className="card-title text-center mb-5">Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3 position-relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                    <button
                                        type="button"
                                        className="btn position-absolute top-50 end-0 translate-middle-y"
                                        onClick={togglePasswordVisibility}
                                        style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
                                    >
                                        {passwordVisible ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <span>
                                    Don't have an account?
                                    <Link to="/register" className='link-signup'>
                                        Sign Up
                                    </Link>
                                </span>
                                <div className="d-grid">
                                    <Button variant="outline-info" className='submit' type="submit">Sign In</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import { useNavigate, Link } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../Styles/Login.css";

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//     const navigate = useNavigate();

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const toggleConfirmPasswordVisibility = () => {
//         setConfirmPasswordVisible(!confirmPasswordVisible);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (!username || !email || !password || !confirmPassword) {
//             toast.error('Please fill in all fields.');
//             return;
//         }
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

//         if (!passwordRegex.test(password)) {
//             toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.');
//             return;
//         }

//         if (password.trim() !== confirmPassword.trim()) {
//             toast.error('Passwords do not match.');
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:5000/register',
//             // const response = await fetch('https://movieverse-backend.onrender.com/register',
//                 {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     Username: username,
//                     Email: email,
//                     Password: password,
//                     ConfirmPassword: confirmPassword,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 console.log('Registration successful:', data);
//                 navigate('/home_login');
//             } else {
//                 toast.error(data.msg || 'Registration failed.');
//             }
//         } catch (error) {
//             toast.error('An error occurred. Please try again later.');
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
//                     <div className="card border-0 shadow rounded-3 my-5">
//                         <div className="card-body p-4 p-sm-5">
//                             <h1 className="card-title text-center mb-5">Sign Up</h1>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="form-floating mb-3">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="floatingUsername"
//                                         placeholder="Username"
//                                         value={username}
//                                         onChange={(e) => setUsername(e.target.value)}
//                                     />
//                                     <label htmlFor="floatingUsername">Username</label>
//                                 </div>
//                                 <div className="form-floating mb-3">
//                                     <input
//                                         type="email"
//                                         className="form-control"
//                                         id="floatingEmail"
//                                         placeholder="name@example.com"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     <label htmlFor="floatingEmail">Email address</label>
//                                 </div>
//                                 <div className="form-floating mb-3 position-relative">
//                                     <input
//                                         type={passwordVisible ? "text" : "password"}
//                                         className="form-control"
//                                         id="floatingPassword"
//                                         placeholder="Password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />
//                                     <label htmlFor="floatingPassword">Password</label>
//                                     <button
//                                         type="button"
//                                         className="btn position-absolute top-50 end-0 translate-middle-y"
//                                         onClick={togglePasswordVisibility}
//                                         style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
//                                     >
//                                         {passwordVisible ? 'Hide' : 'Show'}
//                                     </button>
//                                 </div>
//                                 <div className="form-floating mb-3 position-relative">
//                                     <input
//                                         type={confirmPasswordVisible ? "text" : "password"}
//                                         className="form-control"
//                                         id="floatingConfirmPassword"
//                                         placeholder="Confirm Password"
//                                         value={confirmPassword}
//                                         onChange={(e) => setConfirmPassword(e.target.value)}
//                                     />
//                                     <label htmlFor="floatingConfirmPassword">Confirm Password</label>
//                                     <button
//                                         type="button"
//                                         className="btn position-absolute top-50 end-0 translate-middle-y"
//                                         onClick={toggleConfirmPasswordVisibility}
//                                         style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
//                                     >
//                                         {confirmPasswordVisible ? 'Hide' : 'Show'}
//                                     </button>
//                                 </div>
//                                 <span>
//                                     Already have an account?
//                                     <Link to="/login" className="link-signup">Sign In</Link>
//                                 </span>
//                                 <div className="d-grid">
//                                     <Button variant="outline-info" className='submit' type="submit">Sign Up</Button>
//                                 </div>
//                             </form>
//                             <ToastContainer />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;


//for route after auth
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Styles/Login.css";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !email || !password || !confirmPassword) {
            toast.error('Please fill in all fields.');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.');
            return;
        }

        if (password.trim() !== confirmPassword.trim()) {
            toast.error('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Username: username,
                    Email: email,
                    Password: password,
                    ConfirmPassword: confirmPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token); // Save token to local storage
                navigate('/home_login');
                toast.success('Registration successful!');
            } else {
                toast.error(data.msg || 'Registration failed.');
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
                            <h1 className="card-title text-center mb-5">Sign Up</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingUsername"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <label htmlFor="floatingUsername">Username</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingEmail"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingEmail">Email address</label>
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
                                <div className="form-floating mb-3 position-relative">
                                    <input
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        className="form-control"
                                        id="floatingConfirmPassword"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                                    <button
                                        type="button"
                                        className="btn position-absolute top-50 end-0 translate-middle-y"
                                        onClick={toggleConfirmPasswordVisibility}
                                        style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
                                    >
                                        {confirmPasswordVisible ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <span>
                                    Already have an account?
                                    <Link to="/login" className="link-signup">Sign In</Link>
                                </span>
                                <div className="d-grid">
                                    <Button variant="outline-info" className='submit' type="submit">Sign Up</Button>
                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

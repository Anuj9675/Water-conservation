import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaHome, FaLock } from 'react-icons/fa'; // Import FaHome icon
import axiosInstance from '../utils/axios'; // Import your axios instance
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;

        if (!email || !password) {
            return toast.error('Email and password are required');
        }

        try {
            const response = await axiosInstance.post('/auth/login', loginInfo);
            if (response.data.token) {
                toast.success('You successfully logged in to the site');
                localStorage.setItem('token', response.data.token);

                setTimeout(() => {
                    navigate('/'); // Change this route if needed
                }, 2000);
            } else {
                toast.error(response.data.message || 'Login failed');
            }
        } catch (err) {
            toast.error(err.response?.data?.msg || 'Server error');
        }
    };

    

    return (
        <div className="flex h-screen flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100 p-8 relative">
                <button className="absolute top-0 left-0 m-4">
                    <Link className="text-blue-600 text-2xl flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 "
                    to="/">
                        <FaHome className="mr-2" />
                    </Link>
                </button>
                <div className='w-full max-w-sm p-6 border border-gray-300 rounded-md shadow-md bg-white'>
                    <h1 className="text-2xl text-center font-bold mb-6">Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                onChange={handleChange}
                                type='email'
                                name='email'
                                placeholder='Enter your email...'
                                value={loginInfo.email}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                onChange={handleChange}
                                type='password'
                                name='password'
                                placeholder='Enter your password...'
                                value={loginInfo.password}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                            />
                        </div>
                        <button
                            type='submit'
                            className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 "
                        >
                            Login
                        </button>
                        <span className="block text-center mt-4">Don't have an account?
                            <Link to="/signup" className="text-indigo-500 hover:underline"> Signup</Link>
                        </span>
                    </form>
                    <ToastContainer />
                </div>
            </div>
            <div className="relative hidden lg:flex lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
                <button
                    className="absolute inset-0 flex justify-center items-center"
                   
                >
                    <Link
                        className="text-blue-600 text-xl flex items-center p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-md transition-transform ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        to="/signup">
                        <FaLock className="mr-2" /> SignUp
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Login;

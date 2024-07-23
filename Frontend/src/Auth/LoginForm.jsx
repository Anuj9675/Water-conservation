import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
            console.log('Response Data:', response.data); // Log response data
            const { success, message, jwtToken, name } = response.data;

            if (success) {
                toast.success('You successfully logged in to the site');
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);

                setTimeout(() => {
                    navigate('/home'); // Change this route if needed
                }, 2000);
            } else {
                toast.error(message || 'Login failed');
            }
        } catch (err) {
            console.error('Error Details:', err.response?.data); // Log detailed error
            toast.error(err.response?.data?.msg || 'Server error');
        }
    };

    return (
        <div className="flex h-screen flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleLogin} className="w-full max-w-sm">
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                        className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300"
                    >
                        Login
                    </button>
                    <span className="block text-center mt-4">Don't have an account?
                        <Link to="/signup" className="text-indigo-500 hover:underline"> Signup</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}></div>
        </div>
    );
}

export default Login;

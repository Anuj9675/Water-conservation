import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from '../utils/axios'; // Import the axiosInstance
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return toast.error('Name, email, and password are required');
        }
        try {
            const response = await axiosInstance.post('/auth/signup', signupInfo);
            const { success, message } = response.data;
            if (success) {
                toast.success(message); // Show success message
                setTimeout(() => {
                    navigate('/login'); // Navigate to login page after 5 seconds
                }, 5000); // 5000 milliseconds = 5 seconds
            }
        } catch (err) {
            toast.error(err.response?.data?.msg || 'Server error');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
                <h1 className="text-2xl font-bold mb-6">Signup</h1>
                <form onSubmit={handleSignup} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label htmlFor='name' className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='name'
                            autoFocus
                            placeholder='Enter your name...'
                            value={signupInfo.name}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder='Enter your email...'
                            value={signupInfo.email}
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
                            value={signupInfo.password}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <button
                        type='submit'
                        className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300"
                    >
                        Signup
                    </button>
                    <span className="block text-center mt-4">Already have an account?
                        <Link to="/login" className="text-indigo-500 hover:underline">Login</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}></div>
        </div>
    );
}

export default Signup;

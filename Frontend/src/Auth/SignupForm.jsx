import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaHome, FaLock } from 'react-icons/fa'; 
import axiosInstance from '../utils/axios'; 
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

            // Check if response status is 200 and contains a token
            if (response.status === 200 && response.data.token) {
                toast.success('You have successfully registered');
                localStorage.setItem('token', response.data.token);

                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                // Handle cases where token might not be present but status is 200
                toast.error(response.data.message || 'Registration failed');
            }
        } catch (err) {
            // Detailed error handling for different cases
            if (err.response) {
                // Server responded with a status code outside the range of 2xx
                toast.error(err.response.data.message || 'Server error');
            } else if (err.request) {
                // The request was made but no response was received
                toast.error('No response from server');
            } else {
                // Something happened in setting up the request
                toast.error('Request setup error');
            }
        }
    };

    return (
        <div className="flex h-screen flex-col lg:flex-row">
            <div className="relative lg:flex lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('${"https://cdn.discordapp.com/attachments/853242550243557408/1268096918509195385/Bgls.jpg?ex=66ab2ec9&is=66a9dd49&hm=0c0eddd8e78831281edbdfc2d0221f651d5b81ac39f6b38d1edc4918e9c875dd&"})` }}>
                <button className="absolute top-100 m-4 z-10">
                    <Link className="text-blue-600 text-2xl flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        to="/">
                        <FaHome className="mr-2" />
                    </Link>
                </button>
                <div>
                    <button className="absolute inset-0 flex justify-center items-center z-1">
                        <Link
                            to="/login"
                            className="text-blue-600 text-xl flex items-center p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-opacity-40 hover:backdrop-blur-md"
                        >
                            <FaLock className="mr-2" /> LogIn
                        </Link>
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
                <div className="w-full max-w-sm p-6 border border-gray-300 rounded-md shadow-md bg-white">
                    <h1 className="text-2xl text-center font-bold mb-6">Signup</h1>
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
                            <Link to="/login" className="text-indigo-500 hover:underline"> Login</Link>
                        </span>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Signup;

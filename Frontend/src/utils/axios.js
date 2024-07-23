import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust the baseURL to match your backend server
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;

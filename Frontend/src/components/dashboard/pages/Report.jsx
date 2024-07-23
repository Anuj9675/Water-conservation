// pages/Report.js
import React, { useState } from 'react';
import axios from 'axios';

function Report() {
    const [report, setReport] = useState({
        type: '',
        description: '',
    });

    const handleChange = (e) => {
        setReport({
            ...report,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send report to API
        axios.post('https://api.example.com/report', report)
            .then(response => {
                alert('Report submitted successfully!');
            })
            .catch(error => {
                console.error("There was an error submitting the report!", error);
            });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Report an Issue</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Type of Issue:</label>
                    <input
                        type="text"
                        name="type"
                        value={report.type}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description:</label>
                    <textarea
                        name="description"
                        value={report.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
        </div>
    );
}

export default Report;

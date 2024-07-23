import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Funding() {
    const [fundingData, setFundingData] = useState([]);

    useEffect(() => {
        // Fetch funding data from API
        axios.get('https://api.example.com/funding')
            .then(response => {
                setFundingData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the funding data!", error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Grant and Funding Management</h1>
            <div>
                {fundingData.map((funding, index) => (
                    <div key={index} className="mb-2 p-4 bg-gray-100 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold">{funding.name}</h2>
                        <p>Amount: {funding.amount}</p>
                        <p>Status: {funding.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Funding;

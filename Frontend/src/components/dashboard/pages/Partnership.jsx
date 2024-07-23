import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Partnerships = () => {
  const [partnerships, setPartnerships] = useState([]);

  useEffect(() => {
    // Simulated API call using Axios (replace with actual API endpoint)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPartnerships(response.data.slice(0, 6)); // Limit to 6 partnerships for demo
      })
      .catch(error => {
        console.error('Error fetching partnerships:', error);
      });
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-8">Partnerships for Water Conservation & Environmental Protection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnerships.map(partnership => (
          <div key={partnership.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Example image from Unsplash */}
            <img className="w-full h-48 object-cover object-center" src={`https://source.unsplash.com/600x400/?water,environment`} alt="Partner" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{partnership.title}</h3>
              <p className="text-gray-700">{partnership.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;

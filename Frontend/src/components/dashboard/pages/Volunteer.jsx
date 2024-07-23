import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Volunteer() {
    const [volunteerTasks, setVolunteerTasks] = useState([]);

    useEffect(() => {
        // Fetch volunteer tasks data from API
        axios.get('https://api.example.com/volunteer-tasks')
            .then(response => {
                setVolunteerTasks(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the volunteer tasks data!", error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Volunteer Coordination</h1>
            <div>
                {volunteerTasks.map((task, index) => (
                    <div key={index} className="mb-2 p-4 bg-gray-100 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold">{task.name}</h2>
                        <p>Description: {task.description}</p>
                        <p>Date: {task.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Volunteer;

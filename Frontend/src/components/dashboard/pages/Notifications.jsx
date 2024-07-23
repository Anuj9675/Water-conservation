import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications data from API
        axios.get('https://api.example.com/notifications')
            .then(response => {
                setNotifications(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the notifications data!", error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Notifications and Alerts</h1>
            <div>
                {notifications.map((notification, index) => (
                    <div key={index} className="mb-2 p-4 bg-gray-100 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold">{notification.title}</h2>
                        <p>{notification.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notifications;

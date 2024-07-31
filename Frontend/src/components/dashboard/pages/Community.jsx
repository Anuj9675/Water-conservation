import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axios'; // Adjust the path as needed

function Community() {
  const [users, setUsers] = useState([]); // Initialize users as an empty array
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users'); // Fetch all users from your backend
        setUsers(response.data); // Set the users data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 p-2 text-left">Name</th>
                <th className="border-b-2 border-gray-300 p-2 text-left">Email</th>
                <th className="border-b-2 border-gray-300 p-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-300">
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">
                    <span className={`${user.status === 'online' ? 'text-green-500' : 'text-red-500'}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Community;

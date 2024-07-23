import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

const mockUsers = [
  { id: 1, name: 'Alice', status: 'online' },
  { id: 2, name: 'Bob', status: 'offline' },
  { id: 3, name: 'Charlie', status: 'online' },
];

const mockMessages = [
  { id: 1, user: 'Alice', text: 'Hi there!' },
  { id: 2, user: 'Bob', text: 'Hello!' },
];

function Community() {
  const [forums, setForums] = useState([]);
  const [users, setUsers] = useState(mockUsers);
  const [messages, setMessages] = useState(mockMessages);
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('Alice'); // Mock current logged-in user

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const handleMessageSend = () => {
    if (currentMessage.trim() !== '') {
      const newMessage = { id: messages.length + 1, user: currentUser, text: currentMessage };
      setMessages(prevMessages => [newMessage, ...prevMessages]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    axios.get('https://api.example.com/community-forums')
      .then(response => {
        setForums(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the community forums data!", error);
      });
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleMessageSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center text-black p-4">
        <h1 className="text-3xl font-bold">Community Chat</h1>
      </div>
      <div className="flex flex-1 h-fit">
        <div className="flex-1 bg-gray-200 flex flex-col">
          <Scrollbars style={{ flex: 1 }}>
            <div className="p-4 space-y-4 m-4">
              {[...messages].reverse().map((message, index) => (
                <div key={message.id} className={`flex ${message.user === currentUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-4 rounded-lg shadow ${message.user === currentUser ? 'bg-blue-500 text-white' : 'bg-white'}`}>
                    <strong>{message.user}: </strong><span>{message.text}</span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </Scrollbars>
          <div className="p-4 bg-gray-300 flex items-center">
            <input
              ref={inputRef}
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-md"
              placeholder="Type your message..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="ml-2 p-2 bg-blue-500 text-white rounded-md"
              onClick={handleMessageSend}
            >
              Send
            </button>
          </div>
        </div>
        <div className="w-1/4 bg-white p-4 border-l border-gray-300 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className={`flex items-center p-2 mb-2 rounded-md ${user.status === 'online' ? 'bg-green-100' : 'bg-red-100'}`}>
                <span className={`w-3 h-3 mr-2 rounded-full ${user.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Community;

import React, { useState } from 'react';
import { FaBars, FaAngleDown, FaAngleUp, FaSignOutAlt, FaCog, FaBell, FaFileAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Defaultpic from '../../assets/Defaultpic.png';

function Header({ user, isSidebarOpen, toggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogoutSuccess(true);
    setTimeout(() => {
      setLogoutSuccess(false);
      navigate('/login');
    }, 2000);
  };

  const getInitials = (name) => {
    const names = name.split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    } else {
      return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
    }
  };

  return (
    <div className="relative flex flex-col">
      {logoutSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-200 text-green-800 p-4 rounded-lg shadow-lg transition-opacity opacity-100">
          Logout successfully
        </div>
      )}
      <div className="flex justify-between items-center p-4 shadow-md bg-white transition-all duration-300">
        <div className="flex items-center">
          {!isSidebarOpen && (
            <FaBars className="w-6 h-6 text-gray-600 cursor-pointer" onClick={toggleSidebar} />
          )}
        </div>
        <div className="flex items-center">
          <FaBell className="w-6 h-6 text-gray-600 mx-2" />
          <div className="flex items-center">
            <div className="text-xl font-semibold mx-4">
              {user ? (user.name.length > 10 ? getInitials(user.name) : user.name) : 'Loading...'}
            </div>
            <div className="flex items-center cursor-pointer" onClick={toggleMenu}>
              <img
                src={Defaultpic}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              {isMenuOpen ? (
                <FaAngleUp className="w-6 h-6 text-gray-600 ml-2" />
              ) : (
                <FaAngleDown className="w-6 h-6 text-gray-600 ml-2" />
              )}
            </div>
            {isMenuOpen && (
              <div className="relative">
                <div className="absolute top-12 right-0 bg-white shadow-md rounded-b-md py-2 px-8 border border-gray-200">
                  <button
                    onClick={handleLogout}
                    className='block w-full py-2 flex items-center text-left transition-colors duration-200 ease-in-out hover:text-red-500'>
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                  <Link to="/dashboard/report" className='block w-full py-2 flex items-center transition-colors duration-200 ease-in-out hover:text-orange-500'>
                    <FaFileAlt className="mr-2" /> Report
                  </Link>
                  <Link to="/settings" className="block w-full py-2 flex items-center transition-colors duration-200 ease-in-out hover:text-gray-700">
                    <FaCog className="mr-2" /> Settings
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

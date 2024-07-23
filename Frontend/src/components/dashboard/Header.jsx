import React, { useState } from 'react';
import { FaBars, FaAngleDown, FaAngleUp, FaSignOutAlt, FaCog, FaBell, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Defaultpic from '../../assets/Defaultpic.png';

function Header({ user, isSidebarOpen, toggleSidebar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white transition-all duration-300">
      <div className="flex items-center">
        {!isSidebarOpen && (
          <FaBars className="w-6 h-6 text-gray-600 cursor-pointer" onClick={toggleSidebar} />
        )}
      </div>
      <div className="flex items-center">
        <FaBell className="w-6 h-6 text-gray-600 mx-2" />
        <h2 className="text-xl font-semibold mx-4">{user.name}</h2>
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
              <Link to="/" className='block w-full py-2 flex items-center'>
                <FaSignOutAlt className="mr-2" /> Logout
              </Link>
              <Link to="/dashboard/report" className='block w-full py-2 flex items-center'>
                <FaFileAlt className="mr-2" /> Report
              </Link>
              <Link to="/settings" className="block w-full py-2 flex items-center">
                <FaCog className="mr-2" /> Settings
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

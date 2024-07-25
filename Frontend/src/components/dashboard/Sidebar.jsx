import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTimes, FaHome, FaProjectDiagram, FaUsers,
  FaDollarSign, FaHandsHelping, FaBook,
  FaSignOutAlt, FaCog, FaFlag
} from 'react-icons/fa';

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed h-full p-3 bg-gray-100 shadow w-72 shadow-gray-400 rounded-tr-xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'left-0 z-50' : '-left-full'}`}
      style={{ overflowY: 'hidden', overflowX: 'hidden' }}
      onScroll={handleScroll}
    >
      {/* Top left corner button */}
      <button className="flex justify-between items-center mb-8">
        <Link to="/" className="text-blue-600 text-2xl flex items-center transition-transform transform hover:scale-110">
          <FaHome className="mr-2" />
        </Link>
      </button>

      {/* Sidebar Close Button */}
      <div className="flex justify-end">
        <FaTimes className={`w-6 h-6 text-black hover:text-gray-950 text-md cursor-pointer ${isScrolled ? 'hidden' : 'block'}`} onClick={toggleSidebar} />
      </div>
      
      {/* Sidebar Title */}
      <div className="sticky top-0 text-center p-3 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">
          Water Conservation
        </h2>
      </div>

      {/* Sidebar Menu */}
      <div className="mx-8" style={{ overflowY: 'auto', height: 'calc(100% - 72px - 48px)' }}>
        <div>
          <h1 className="text-black text-md sticky">MENU</h1>
          <ul className="pt-2 space-y-1">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard') ? 'text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard') ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                >
                  <FaHome className="w-4 h-4" />
                </div>
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/projects"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/projects') ? 'text-gray-500 hover:text-black hover:bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/projects') ? 'bg-yellow-500 text-white' : 'bg-white text-yellow-500 hover:bg-yellow-500 hover:text-white'}`}
                >
                  <FaProjectDiagram className="w-4 h-4" />
                </div>
                <span className="ml-2">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/community"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/community') ? 'text-gray-500 hover:text-black hover:bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/community') ? 'bg-violet-500 text-white' : 'bg-white text-violet-500 hover:bg-violet-500 hover:text-white'}`}
                >
                  <FaUsers className="w-4 h-4" />
                </div>
                <span className="ml-2">Community</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/funding"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/funding') ? 'text-gray-500 hover:text-black hover:bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/funding') ? 'bg-green-500 text-white' : 'bg-white text-green-500 hover:bg-green-500 hover:text-white'}`}
                >
                  <FaDollarSign className="w-4 h-4" />
                </div>
                <span className="ml-2">Funding</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/volunteer"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/volunteer') ? 'text-gray-500 hover:text-black hover:bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/volunteer') ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-500 hover:text-white'}`}
                >
                  <FaHandsHelping className="w-4 h-4" />
                </div>
                <span className="ml-2">Volunteer</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/resources"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/resources') ? 'text-gray-500 hover:text-black hover:bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/resources') ? 'bg-sky-500 text-white' : 'bg-white text-sky-500 hover:bg-sky-500 hover:text-white'}`}
                >
                  <FaBook className="w-4 h-4" />
                </div>
                <span className="ml-2">Resources</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-4">
          <h1 className="text-black text-md sticky">ACCOUNT PAGES</h1>
          <ul className="pt-2 space-y-1">
            <li>
              <Link
                to="/settings"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/settings') ? 'text-gray-500 hover:text-black hover:bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/settings') ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                >
                  <FaCog className="w-4 h-4" />
                </div>
                <span className="ml-2">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                to="/report"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/report') ? 'text-gray-500 hover:text-black hover:bg-gray-200' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/report') ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'}`}
                >
                  <FaFlag className="w-4 h-4" />
                </div>
                <span className="ml-2">Report</span>
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/logout') ? 'text-red-500 hover:bg-red-500 hover:text-white' : 'text-red-500 hover:bg-red-500 hover:text-white'}`}
              >
                <div
                  className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/logout') ? 'bg-red-500 text-white' : 'bg-white text-red-500 hover:bg-red-500 hover:text-white'}`}
                >
                  <FaSignOutAlt className="w-4 h-4" />
                </div>
                <span className="ml-2">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

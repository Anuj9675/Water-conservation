import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaHome, FaProjectDiagram, FaUsers, FaDollarSign, FaHandsHelping, FaBook, FaSignOutAlt, FaCog, FaFlag } from 'react-icons/fa';


function Sidebar({ user, isSidebarOpen, toggleSidebar }) {
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
    <div className={`fixed h-full p-3 bg-gray-100 shadow w-72 shadow shadow-gray-400 rounded-tr-xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'left-0 z-50' : '-left-full'}`} style={{ overflowY: 'hidden', overflowX: 'hidden' }} onScroll={handleScroll}>
      <div className="flex justify-end">
        <FaTimes className={`w-6 h-6 text-black hover:text-gray-950 text-md cursor-pointer ${isScrolled ? 'hidden' : 'block'}`} onClick={toggleSidebar} />
      </div>
      <div className="sticky top-0 text-center p-3 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">
          Water Conservation
        </h2>
      </div>
      <div className="mx-8" style={{ overflowY: 'auto', height: 'calc(100% - 72px - 48px)' }}>
        <div>
          <h1 className="text-black text-md sticky">MENU</h1>
          <ul className="pt-2 space-y-1">
            <li>
              <Link to="/dashboard" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard') ? 'bg-black text-white' : 'text-black bg-white'}`}>
                  <FaHome className="w-4 h-4" />
                </div>
                <span className="ml-2">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/projects" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/projects') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/projects') ? 'bg-black text-white' : 'text-black bg-white'}`}>
                  <FaProjectDiagram className="w-4 h-4" />
                </div>
                <span className="ml-2">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/community" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/community') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/community') ? 'bg-black text-white' : 'text-black bg-white'}`}>
                  <FaUsers className="w-4 h-4" />
                </div>
                <span className="ml-2">Community</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/funding" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/funding') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/funding') ? 'bg-black text-white' : 'text-black bg-white'}`}>
                  <FaDollarSign className="w-4 h-4" />
                </div>
                <span className="ml-2">Funding</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/volunteer" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/volunteer') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/volunteer') ? 'bg-black text-white' : 'text-black bg-white'}`}>
                  <FaHandsHelping className="w-4 h-4" />
                </div>
                <span className="ml-2">Volunteer</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/resources" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/dashboard/resources') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/dashboard/resources') ? 'bg-black text-white' : 'text-black bg-white'}`}>
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
              <Link to="/settings" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/settings') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/settings') ? 'bg-black text-white' : 'text-black bg-white'}`}>
                  <FaCog className="w-4 h-4" />
                </div>
                <span className="ml-2">Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/report" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/report') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/report') ? 'bg-black text-white' : 'text-black bg-white'}`}>
                  <FaFlag className="w-4 h-4" />
                </div>
                <span className="ml-2">Report</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={`flex items-center p-2 space-x-2 rounded-md text-sm transition-colors duration-200 ease-in-out ${isActive('/logout') ? 'bg-white shadow-md border rounded-md text-black' : 'text-gray-500 hover:text-black hover:bg-gray-200'}`}>
                <div className={`p-1 rounded shadow shadow-gray-400 transition-colors duration-200 ease-in-out ${isActive('/logout') ? 'bg-black text-white' : 'text-black bg-white'}`}>
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

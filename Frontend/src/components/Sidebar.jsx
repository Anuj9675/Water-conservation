// Sidebar.js
import React from 'react';
import { FaHome, FaRegLightbulb, FaHandHoldingWater } from 'react-icons/fa'; // Import icons

const Sidebar = () => {
  // Function to handle scrolling to sections
  const handleClickLink = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 p-4 flex flex-col items-center space-y-4 bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg">
      <div
        onClick={() => handleClickLink("hero")}
        className="text-gray-500 hover:text-gray-600 transition cursor-pointer"
      >
        <FaHome size={30} />
      </div>
      <div
        onClick={() => handleClickLink("features")}
        className="text-blue-500 hover:text-blue-600 transition cursor-pointer"
      >
        <FaRegLightbulb size={30} />
      </div>
      <div
        onClick={() => handleClickLink("fundings")}
        className="text-green-500 hover:text-green-600 transition cursor-pointer"
      >
        <FaHandHoldingWater size={30} />
      </div>
    </div>
  );
};

export default Sidebar;

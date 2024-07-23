import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the home icon

// Image URLs
const missionImages = {
  education: 'https://www.example.com/path-to-your-image/education.jpg',
  practices: 'https://www.example.com/path-to-your-image/practices.jpg',
  community: 'https://www.example.com/path-to-your-image/community.jpg',
  policy: 'https://www.example.com/path-to-your-image/policy.jpg',
  fun: 'https://www.example.com/path-to-your-image/community-fun.jpg', // Added fun image
};

const handleHomeClick = () => {
    // Close the current tab
    window.close();
  };


const OurMission = () => {
  return (
    <div className="min-h-screen text-gray-800 py-8 px-4">
      <div className="container mx-auto">
        <button className="flex justify-between items-center mb-8" 
        onClick={handleHomeClick}>
          <Link to="/" className="text-blue-600 text-2xl flex items-center transition-transform transform hover:scale-110">
            <FaHome className="mr-2" /> Back to Home
          </Link>
        </button>

        {/* Mission Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">Our Mission</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our mission is to create a world where water is conserved and protected for future generations. We are committed to:
          </p>
        </section>

        {/* Four Row Sections with 2 Columns */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={missionImages.education} alt="Education" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110" />
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Educating the Public</h2>
            <p className="text-gray-700">
              Providing information and resources to help people understand the importance of water conservation and how they can contribute.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={missionImages.practices} alt="Sustainable Practices" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110" />
            <h2 className="text-xl font-semibold mb-2 text-green-600">Promoting Sustainable Practices</h2>
            <p className="text-gray-700">
              Supporting innovations and practices that improve water management and reduce waste for a more sustainable future.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={missionImages.community} alt="Community Initiatives" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110" />
            <h2 className="text-xl font-semibold mb-2 text-orange-600">Supporting Community Initiatives</h2>
            <p className="text-gray-700">
              Working with local communities to implement water conservation projects and address specific environmental challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={missionImages.policy} alt="Policy Advocacy" className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110" />
            <h2 className="text-xl font-semibold mb-2 text-red-600">Advocating for Policy Changes</h2>
            <p className="text-gray-700">
              Pushing for policies and regulations that protect water resources and encourage sustainable use at the local, national, and global levels.
            </p>
          </div>
        </section>

        {/* Detailed Explanation Row */}
        <section className="grid gap-8 md:grid-rows-2 lg:grid-rows-2 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Education</h2>
            <p className="text-lg mb-4">
              Knowledge is power. By educating individuals and communities about water conservation, we empower them to make informed decisions and adopt practices that benefit the environment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-green-800">Sustainable Practices</h2>
            <p className="text-lg mb-4">
              Implementing and promoting sustainable practices helps reduce water waste and supports long-term resource management, ensuring that future generations can enjoy clean and abundant water.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-orange-800">Community Initiatives</h2>
            <p className="text-lg mb-4">
              Local actions have a significant impact. Supporting community-driven projects allows us to address specific challenges and make a difference at the grassroots level.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-800">Policy Advocacy</h2>
            <p className="text-lg mb-4">
              Effective policies are crucial for large-scale change. By advocating for policies that protect water resources, we contribute to systemic improvements and sustainable practices on a broader scale.
            </p>
          </div>
        </section>

        {/* Fun and Engaging Section */}
        <section className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Get Involved & Have Fun</h2>
          <p className="text-lg mb-6">
            Making a difference can be enjoyable! Join us in various activities and events that not only contribute to water conservation but also provide a chance to engage with others and have fun.
          </p>
          <p className="text-lg mb-4">
            Participate in local clean-up events, educational workshops, and community fairs. Share your passion for water conservation through social media, organize fundraising activities, or volunteer for our projects.
          </p>
          <p className="text-lg mb-4">
            Together, we can make water conservation a community-driven effort that is both impactful and enjoyable. Get involved today and help us create a better future for our planet!
          </p>
          <img src={missionImages.fun} alt="Community Fun" className="w-full h-auto rounded-lg mt-6" />
        </section>
      </div>
    </div>
  );
};

export default OurMission;

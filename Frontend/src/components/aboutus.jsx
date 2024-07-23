import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the home icon

const AboutUs = () => {
    const handleHomeClick = () => {
        // Close the current tab
        window.close();
      };

  return (
    <div className="min-h-screen text-gray-800 py-8 px-4">
      <div className="container mx-auto">
        <button className="flex justify-between items-center mb-8"
        onClick={handleHomeClick}>
          <Link to="/" className="text-blue-600 text-2xl flex items-center transition-transform transform hover:scale-110">
            <FaHome className="mr-2" /> Back to Home
          </Link>
        </button>

        {/* About Us Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-800 text-center">About Us</h1>
          <div className="space-y-12">
            {/* First Card: Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <img src="https://www.example.com/path-to-your-image/water-conservation.jpg" alt="Water Conservation" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="order-2 md:order-1">
                <p className="text-lg mb-6 leading-relaxed">
                  Welcome to our Water Conservation and Environment Platform! Our organization is passionately dedicated to safeguarding our planet's most vital resource—water. Through innovative education, dynamic advocacy, and impactful action, we are committed to ensuring a sustainable and healthy future for everyone.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  We work tirelessly to elevate awareness about the critical importance of water conservation. Our platform provides essential resources for individuals and organizations, fostering a collaborative environment to tackle pressing environmental challenges. By partnering with communities and stakeholders, we strive to make a profound and lasting impact on our environment.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Our initiatives include the implementation of innovative projects, the support of local and global initiatives, and the advocacy of effective policies. We invite you to explore our efforts and join us in our mission to make a meaningful difference in water conservation and environmental protection.
                </p>
              </div>
            </div>

            {/* Second Card: Text Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://www.example.com/path-to-your-image/community-projects.jpg" alt="Community Projects" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Vision</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  We envision a future where clean and abundant water is a universal reality, and where environmental stewardship is embedded in the values of communities worldwide. Our vision is to ignite a global movement towards sustainable and equitable water practices, ensuring that future generations inherit a thriving planet.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  By uniting people through education, action, and advocacy, we are committed to achieving our vision. Our efforts are directed towards fostering environmental responsibility, promoting innovative solutions, and building a resilient and sustainable future for all.
                </p>
              </div>
            </div>

            {/* Third Card: Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2">
                <img src="https://www.example.com/path-to-your-image/volunteer.jpg" alt="Get Involved" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-blue-800">Join Us in Making a Difference</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  At our core, we believe in the power of collective action. Whether you're an individual, a community group, or an organization, there are numerous ways you can get involved and contribute to our mission. From participating in local events and campaigns to supporting our projects and initiatives, your involvement can make a significant impact.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Explore our website to find out more about upcoming events, volunteer opportunities, and how you can support our cause. Together, we can drive positive change and work towards a future where water conservation and environmental protection are prioritized.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaEnvelope, FaArrowUp } from 'react-icons/fa'; // Import the arrow icon
import hero3 from "../assets/hero3.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="py-8 bg-fixed bg-cover text-black" style={{ backgroundImage: `url(${hero3})` }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="flex flex-col lg:flex-row justify-evenly lg:gap-24">
          <div className="relative w-full lg:w-1/4 mb-6 lg:mb-0">
            <div className='flex flex-rows gap-3'>
            <h2 className="text-xl lg:text-2xl font-bold">Get Started</h2>
            <button
              onClick={scrollToTop}
              className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
            </div>
            <p className="mt-2 text-sm lg:text-lg font-semibold">
              All the services are accessible after you fully register to our website.
            </p>
          </div>

          <div className='flex flex-row justify-evenly lg:gap-32 sm:gap-4'>

            <div className=" mb-6 lg:mb-0">
              <h2 className="text-lg lg:text-xl font-semibold">About</h2>
              <div className="mt-2 flex flex-col space-y-1 text-xs lg:text-sm font-semibold">
                <Link to="/about-us" target='blank'>About Us</Link>
                <Link to="/our-mission" target='blank'>Our Mission</Link>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <h2 className="text-lg lg:text-xl font-semibold">Contact Us</h2>
              <div className="mt-2 flex flex-col space-y-1 text-xs lg:text-sm font-semibold">
                <Link to="/contact-us" className="flex items-center space-x-2">
                  <FaEnvelope className="text-black" />
                  <span>Mail</span>
                </Link>
                <Link to="/contact-us" className="flex items-center space-x-2">
                  <FaInstagram className="text-black" />
                  <span>Instagram</span>
                </Link>
                <Link to="/contact-us" className="flex items-center space-x-2">
                  <FaFacebook className="text-black" />
                  <span>Facebook</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center font-semibold mt-8 text-xs lg:text-sm">
          <p>© 2024 Anuj Upadhyay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

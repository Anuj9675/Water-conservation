import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const images = [hero1, hero2, hero3]; // Array of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  useEffect(() => {
    // Check if user is logged in
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  return (
    <div id="hero" className="relative h-screen overflow-hidden">
      {/* Background images with transition */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center py-4 px-6 lg:py-12 lg:px-32 md:py-8 md:px-16 relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="WC Logo"
            className="h-[60px] w-auto lg:h-[150px] md:h-[130px] mt-4 spin-animation"
          />
        </div>

        {/* Text and Buttons */}
        <div className="text-center lg:text-right">
          <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[47px] lg:mt-12 font-serif text-black">Water Conservation</p>
          {isLoggedIn ? (
            <Link to="/dashboard">
              <button className="mt-4 bg-blue-500 text-white shadow shadow-xl text-sm md:text-lg lg:text-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Dashboard
              </button>
            </Link>
          ) : (
            <div className="mt-2 space-x-2">
              <Link to="/login">
                <button className="bg-blue-500 text-white shadow shadow-xl text-sm md:text-lg lg:text-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-500 text-white shadow shadow-xl text-sm md:text-lg lg:text-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Signup
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <hr className="border border-gray-500 mx-6 lg:mx-32 md:mx-16 sticky w-5/6 z-10" />

      {/* Hero main */}
      <div className="flex flex-col items-center justify-center text-center z-10 relative mt-16 md:mt-24 lg:mt-32">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Save Water, Save Life</h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4">
          Water is life. Act now to conserve and protect our future.
        </p>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full transition-colors duration-500 ${index === currentImageIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

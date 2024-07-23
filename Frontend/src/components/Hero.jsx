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

      {/* Text above the Navbar */}
      <div className="lg:absolute lg:top-20 lg:-right-96 lg:left-96 text-center text-black z-10">
        <p className="lg:text-[47px] md:text-[45px] font-serif">Water Conservation</p>
        {isLoggedIn ? (
          <Link to="/dashboard" className=" mt-4 bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">
            Dashboard
          </Link>
        ) : (
          <div className="mt-4">
            <Link to="/login" className=" bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300 mr-2">Login</Link>
            <Link to="/signup" className="inline-block bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 transition duration-300">Signup</Link>
          </div>
        )}
      </div>

      {/* Navbar */}
      <div className='lg:py-12 lg:px-32 md:py-16 md:px-24 relative z-10'>
        <nav className="h-16 flex items-center justify-between lg:py-16 lg:px-24 md:py-12 md:px-24 mb-12">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="WC Logo"
              className="h-[100px] w-auto lg:h-[150px] mt-12 spin-animation"
            />
          </div>
        </nav>
        <hr className='border border-gray-500' />
      </div>

      {/* Hero main */}
      <div className="flex flex-col items-center justify-center text-center z-10 relative">
        <div className='absolute top-10'>
          <h1 className='text-6xl'>Save Water, Save Life</h1>
          <p className="text-xl mt-4">
            Water is life. Act now to conserve and protect our future.
          </p>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-20 left-20 flex space-x-2 z-10">
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

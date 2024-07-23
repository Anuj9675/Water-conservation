import React, { useEffect, useRef } from 'react';
import Education from '../assets/Education.avif';
import Events from '../assets/Events.avif';
import Tips from '../assets/Tips.avif';
import WaterCons from '../assets/WaterCons.avif';

const Features = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      featureRefs.current.forEach((ref) => {
        if (ref && ref.getBoundingClientRect().top < window.innerHeight) {
          ref.classList.add('scroll-animation');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      imgSrc: Education,
      alt: 'Educational Resources',
      title: 'Educational Resources',
      description: 'Access a wealth of information on how to conserve water at home and in your community. Learn about water conservation techniques, sustainable practices, and the impact of water scarcity on the environment.'
    },
    {
      imgSrc: Events,
      alt: 'Community Events',
      title: 'Community Events',
      description: 'Join local events and initiatives focused on water conservation and sustainability. Participate in workshops, clean-up drives, and community gatherings to spread awareness and contribute to a greener planet.'
    },
    {
      imgSrc: Tips,
      alt: 'Conservation Tips',
      title: 'Conservation Tips',
      description: 'Discover practical tips and tricks to reduce your water usage and save money. Implement small changes in your daily routine that can lead to significant water savings and promote a more sustainable lifestyle.'
    },
    {
      imgSrc: WaterCons,
      alt: 'Water Conservation Initiatives',
      title: 'Water Conservation Initiatives',
      description: 'Explore various water conservation initiatives and learn how you can contribute to preserving our precious water resources. Support projects aimed at improving water management and infrastructure in your community.'
    }
  ];

  return (
    <div id="features" className="pt-20 ">
      <h2 className="text-4xl font-bold text-center mb-10">Our Features</h2>
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => featureRefs.current[index] = el}
            className={`flex flex-col md:flex-row items-center mb-8 p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:p-6`}
            style={{ padding: '20px', backgroundColor: '#f8fafc' }}
          >
            <img
              src={feature.imgSrc}
              alt={feature.alt}
              className="w-full md:w-1/2 rounded-md mb-4 md:mb-0"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
            <div className="md:w-1/2 md:pl-6">
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

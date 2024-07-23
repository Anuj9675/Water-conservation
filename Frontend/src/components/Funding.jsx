import React from 'react';
import { Link } from 'react-router-dom';
import CleanWater from '../assets/CleanWater.avif';
import RiverCleanup from '../assets/RiverClean.avif';
import DroughtRelief from '../assets/DroughtRelief.avif';
import TreePlanting from '../assets/TreePlanting.avif';
import OceanCleanup from '../assets/OceanCleanup.avif';
import WaterEducation from '../assets/WaterEducation.avif';
import WaterPP from '../assets/WaterPP.jpg'

const cardsData = [
  {
    id: 1,
    title: "Clean Water for All",
    description: "Help us provide access to clean and safe drinking water to communities in need.",
    donated: "$25,000.00 donated of $50,000.00 goal",
    imgSrc: CleanWater,
    donateLink: "/donate/clean-water"
  },
  {
    id: 2,
    title: "River Cleanup Projects",
    description: "Support our efforts to clean up and restore polluted rivers and waterways.",
    donated: "$40,000.00 donated of $75,000.00 goal",
    imgSrc: RiverCleanup,
    donateLink: "/donate/river-cleanup"
  },
  {
    id: 3,
    title: "Drought Relief Efforts",
    description: "Contribute to our programs that provide relief to areas affected by droughts.",
    donated: "$60,000.00 donated of $100,000.00 goal",
    imgSrc: DroughtRelief,
    donateLink: "/donate/drought-relief"
  },
  {
    id: 4,
    title: "Tree Planting Initiatives",
    description: "Join our mission to plant trees and restore natural habitats affected by deforestation.",
    donated: "$35,000.00 donated of $70,000.00 goal",
    imgSrc: TreePlanting,
    donateLink: "/donate/tree-planting"
  },
  {
    id: 5,
    title: "Ocean Cleanup",
    description: "Support efforts to clean up and protect our oceans from pollution.",
    donated: "$50,000.00 donated of $85,000.00 goal",
    imgSrc: OceanCleanup,
    donateLink: "/donate/ocean-cleanup"
  },
  {
    id: 6,
    title: "Water Conservation Education",
    description: "Help us educate communities about the importance of water conservation.",
    donated: "$30,000.00 donated of $60,000.00 goal",
    imgSrc: WaterEducation,
    donateLink: "/donate/water-education"
  }
];

const articleData = {
  heading: "Why Water Conservation Matters",
  pic: WaterPP,
  paragraphs1: [
    "Water is essential to life, yet many communities around the world face challenges in accessing clean and safe drinking water. Through various initiatives, we aim to provide sustainable solutions to these problems, ensuring that everyone has access to this vital resource. From water purification projects to river cleanups and drought relief efforts, our programs are designed to make a tangible impact.",
  ],
  paragraphs2: [
    "By supporting our initiatives, you help us bring clean water to those in need, restore polluted water bodies, and provide relief in areas affected by water scarcity. Together, we can make a significant difference in preserving our environment and improving the quality of life for many people. Join us in our mission to conserve water and protect our planet for future generations.",
  ],
  paragraphs3: [
    "Our ongoing efforts also include raising awareness about the importance of water conservation through education and outreach programs. We work with local communities, schools, and organizations to promote sustainable practices and ensure that water resources are used efficiently. Through collaborative efforts, we aim to foster a culture of conservation and stewardship that will benefit generations to come.",
    "In addition to these initiatives, we are also involved in policy advocacy to influence change at the governmental and institutional levels. By supporting policies that promote water conservation and sustainable management, we can create a more resilient and equitable water future for all."
  ],
  paragraphs4: [
        "In addition to these initiatives, we are also involved in policy advocacy to influence change at the governmental and institutional levels. By supporting policies that promote water conservation and sustainable management, we can create a more resilient and equitable water future for all."
  ]
};

const Funding = () => {


  const cardColors = ['bg-sky-400', 'bg-green-400'];


  return (
    <div id="fundings" className="container mx-auto px-4 py-10">
      {/* Top Heading - Centered */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-10">Water Conservation Initiatives</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Card Section - Left Side */}
        <div className="w-full lg:w-3/4 lg:pl-8 my-8 h-[600px] lg:mt-0 bg-white rounded-md shadow p-4 overflow-y-auto">
          <div className="space-y-4 p-2 p-2">
            {cardsData.map((card, index) => (
              <div key={card.id} className={`rounded shadow-lg border ${cardColors[index % cardColors.length]} p-2`}>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <span className="font-bold">{card.donated}</span>
                    </div>
                    <Link to={card.donateLink}>
                      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Donate Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Article Section - Right Side */}
        <div className="w-full lg:w-1/3 lg:h-[600px] lg:pl-8 mt-8 lg:mt-0 bg-white rounded-md shadow p-4 overflow-hidden">
          <h2 className="text-2xl font-bold my-4">{articleData.heading}</h2>
          <div className='lg:h-[200px] md:h-[200px] w-full my-4'>
            <img
              src={articleData.pic}
              alt="Conservation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className='lg:h-[282px]  overscroll-contain overflow-y-auto flex flex-wrap gap-2'>
            <p className='font-serif'>
            {articleData.paragraphs1}
            </p>
            <p className='font-serif'>
            {articleData.paragraphs2}
            </p><p className='font-serif'>
            {articleData.paragraphs3}
            </p>
            <p className='font-serif'>
            {articleData.paragraphs4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
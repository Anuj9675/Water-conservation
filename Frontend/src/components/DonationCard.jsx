import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ card, isEditable }) => (
  <div className="rounded shadow-lg border p-2">
    <img src={card.imgSrc} alt={card.title} className="w-full h-44 object-cover" />
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
      {isEditable && (
        <div className="mt-4">
          <Link to={`/edit-card/${card.id}`}>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Edit
            </button>
          </Link>
        </div>
      )}
    </div>
  </div>
);

export default DonationCard;

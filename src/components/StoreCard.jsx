// src/components/StoreCard.jsx
import React from 'react';
import RatingStars from './RatingStars';

const StoreCard = ({ store }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-1">{store.name}</h2>
            <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {store.email}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Address:</strong> {store.address}</p>
            <RatingStars rating={parseFloat(store.average_rating)} />
        </div>
    );
};

export default StoreCard;

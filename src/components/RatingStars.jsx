// src/components/RatingStars.jsx
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-gray-400" />);
        }
    }

    return <div className="flex space-x-1">{stars}</div>;
};

export default RatingStars;

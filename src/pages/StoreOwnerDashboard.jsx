// src/pages/StoreOwnerDashboard.jsx
import React, { useEffect, useState, useContext } from 'react';
import storeService from '../services/storeService';
import { AuthContext } from '../context/AuthContext';
import RatingStars from '../components/RatingStars';

const StoreOwnerDashboard = () => {
    const { user } = useContext(AuthContext);
    const [storeRatings, setStoreRatings] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const res = await storeService.getStoreRatingsByOwner(user.id);
                setStoreRatings(res.ratings || []);
                setAverageRating(res.average_rating || 0);
            } catch (err) {
                console.error('Error fetching store ratings:', err);
            }
        };

        if (user?.id) {
            fetchRatings();
        }
    }, [user]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Store Owner Dashboard</h1>
            <p className="mb-4 text-lg font-medium">Average Rating: <RatingStars rating={averageRating} /></p>
            <h2 className="text-lg mb-2 font-semibold">User Ratings</h2>
            <ul className="space-y-3">
                {storeRatings.map((rating) => (
                    <li key={rating.id} className="bg-white p-4 rounded shadow">
                        <p><strong>User:</strong> {rating.user_name}</p>
                        <p><strong>Rating:</strong> <RatingStars rating={rating.rating} /></p>
                        <p><strong>Comment:</strong> {rating.comment}</p>
                    </li>
                ))}
                {storeRatings.length === 0 && <p>No ratings yet for your store(s).</p>}
            </ul>
        </div>
    );
};

export default StoreOwnerDashboard;

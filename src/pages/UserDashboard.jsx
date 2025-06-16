// src/pages/UserDashboard.jsx
import React, { useEffect, useState, useContext } from 'react';
import ratingService from '../services/ratingService';
import { AuthContext } from '../context/AuthContext';

const UserDashboard = () => {
    const { user } = useContext(AuthContext);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const res = await ratingService.getUserRatings(user.id);
                setRatings(res);
            } catch (err) {
                console.error('Failed to fetch ratings:', err);
            }
        };

        if (user?.id) {
            fetchRatings();
        }
    }, [user]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <h2 className="text-lg mb-2">Your Ratings</h2>
            <ul className="space-y-3">
                {ratings.map((rating) => (
                    <li key={rating.id} className="bg-white p-4 rounded shadow">
                        <p><strong>Store:</strong> {rating.store_name}</p>
                        <p><strong>Rating:</strong> {rating.rating} ⭐</p>
                        <p><strong>Comment:</strong> {rating.comment}</p>
                    </li>
                ))}
                {ratings.length === 0 && <p>No ratings yet.</p>}
            </ul>
        </div>
    );
};

export default UserDashboard;

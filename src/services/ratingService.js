// src/services/ratingService.js
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const ratingService = {
    addRating: async (storeId, ratingData) => {
        const token = localStorage.getItem('token');
        const res = await axios.post(`${API}/ratings/${storeId}`, ratingData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    },

    getRatingsByStore: async (storeId) => {
        const res = await axios.get(`${API}/ratings/store/${storeId}`);
        return res.data;
    },

    getRatingsByUser: async (userId) => {
        const res = await axios.get(`${API}/ratings/user/${userId}`);
        return res.data;
    },
};

export default ratingService;

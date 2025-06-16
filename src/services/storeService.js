// src/services/storeService.js
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const storeService = {
    getAllStores: async () => {
        const res = await axios.get(`${API}/stores`);
        return res.data;
    },

    getStoreById: async (id) => {
        const res = await axios.get(`${API}/stores/${id}`);
        return res.data;
    },

    addStore: async (storeData) => {
        const token = localStorage.getItem('token');
        const res = await axios.post(`${API}/stores`, storeData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    },

    deleteStore: async (id) => {
        const token = localStorage.getItem('token');
        const res = await axios.delete(`${API}/stores/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    },
};

export default storeService;

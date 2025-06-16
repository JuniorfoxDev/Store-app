// src/services/authService.js
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const authService = {
    login: async (credentials) => {
        const res = await axios.post(`${API}/auth/login`, credentials);
        return res.data;
    },

    register: async (userData) => {
        const res = await axios.post(`${API}/auth/signup`, userData);
        return res.data;
    },
};

export default authService;

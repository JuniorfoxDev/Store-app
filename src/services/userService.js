// src/services/userService.js
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const userService = {
    getAllUsers: async () => {
        const res = await axios.get(`${API}/users`);
        return res.data;
    },

    getUserById: async (id) => {
        const res = await axios.get(`${API}/users/${id}`);
        return res.data;
    },

    addUser: async (userData) => {
        const res = await axios.post(`${API}/users`, userData);
        return res.data;
    },

    deleteUser: async (id) => {
        const res = await axios.delete(`${API}/users/${id}`);
        return res.data;
    },
};

export default userService;

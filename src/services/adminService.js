// src/services/adminService.js
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const adminService = {
    getDashboardStats: async () => {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${API}/users/admin/stats`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    },
};

export default adminService;

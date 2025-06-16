// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import adminService from '../services/adminService';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalStores: 0,
        totalRatings: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await adminService.getAdminStats();
                setStats(res);
            } catch (err) {
                console.error('Failed to fetch admin stats:', err);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow text-center">
                    <h2 className="text-lg font-semibold">Total Users</h2>
                    <p className="text-3xl">{stats.totalUsers}</p>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                    <h2 className="text-lg font-semibold">Total Stores</h2>
                    <p className="text-3xl">{stats.totalStores}</p>
                </div>
                <div className="bg-white p-4 rounded shadow text-center">
                    <h2 className="text-lg font-semibold">Total Ratings</h2>
                    <p className="text-3xl">{stats.totalRatings}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

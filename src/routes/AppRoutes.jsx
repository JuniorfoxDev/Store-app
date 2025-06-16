import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
import StoreOwnerDashboard from '../pages/StoreOwnerDashboard';
import StoreList from '../pages/StoreList';
import AddStore from '../pages/AddStore';
import AddUser from '../pages/AddUser';
import NotFound from '../pages/NotFound';

import Header from '../components/Header';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user } = useContext(AuthContext);
    if (!user) return <Navigate to="/login" replace />;
    if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" replace />;
    return children;
};

const AppRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute allowedRoles={['admin']}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/add-store"
                    element={
                        <ProtectedRoute allowedRoles={['admin']}>
                            <AddStore />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/add-user"
                    element={
                        <ProtectedRoute allowedRoles={['admin']}>
                            <AddUser />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/user"
                    element={
                        <ProtectedRoute allowedRoles={['user']}>
                            <UserDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/owner"
                    element={
                        <ProtectedRoute allowedRoles={['owner']}>
                            <StoreOwnerDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/stores"
                    element={
                        <ProtectedRoute allowedRoles={['user', 'admin', 'owner']}>
                            <StoreList />
                        </ProtectedRoute>
                    }
                />

                {/* Default and Fallback */}
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default AppRoutes;

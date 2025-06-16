// src/pages/NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-bold text-red-600">404</h1>
            <p className="text-xl mt-2">Oops! Page not found.</p>
            <button
                onClick={() => navigate('/')}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Go to Home
            </button>
        </div>
    );
};

export default NotFound;

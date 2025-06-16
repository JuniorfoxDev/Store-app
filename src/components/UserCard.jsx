// src/components/UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-sm text-gray-600"><strong>Role:</strong> {user.role}</p>
        </div>
    );
};

export default UserCard;

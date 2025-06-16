// src/pages/AddUser.jsx
import React, { useState } from 'react';
import userService from '../services/userService';

const AddUser = () => {
    const [form, setForm] = useState({ name: '', email: '', role: 'user' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.addUser(form);
            setMessage('User added successfully!');
            setForm({ name: '', email: '', role: 'user' });
        } catch (err) {
            setMessage('Error adding user');
            console.error(err);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
            {message && <p className="mb-2 text-sm text-green-600">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="User Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="owner">Store Owner</option>
                </select>
                <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;

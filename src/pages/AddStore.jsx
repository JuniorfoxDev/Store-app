// src/pages/AddStore.jsx
import React, { useState } from 'react';
import storeService from '../services/storeService';

const AddStore = () => {
    const [form, setForm] = useState({ name: '', email: '', address: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await storeService.addStore(form);
            setMessage('Store added successfully!');
            setForm({ name: '', email: '', address: '' });
        } catch (err) {
            setMessage('Error adding store');
            console.error(err);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Add New Store</h2>
            {message && <p className="mb-2 text-sm text-green-600">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Store Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Store Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Store Address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Add Store
                </button>
            </form>
        </div>
    );
};

export default AddStore;

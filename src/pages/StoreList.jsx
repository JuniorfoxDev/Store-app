// src/pages/StoreList.jsx
import React, { useEffect, useState } from 'react';
import storeService from '../services/storeService';
import StoreCard from '../components/StoreCard';

const StoreList = () => {
    const [stores, setStores] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const res = await storeService.getAllStores(search);
                setStores(res);
            } catch (err) {
                console.error('Error fetching stores:', err);
            }
        };
        fetchStores();
    }, [search]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Browse Stores</h1>
            <input
                type="text"
                placeholder="Search by name or address..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 border rounded w-full mb-6"
            />
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {stores.map((store) => (
                    <StoreCard key={store.id} store={store} />
                ))}
            </div>
        </div>
    );
};

export default StoreList;

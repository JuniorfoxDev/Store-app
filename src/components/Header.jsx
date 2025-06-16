import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-3 px-5">
                <h1 className="text-xl font-bold">
                    <Link to="/">Store Ratings App</Link>
                </h1>
                <nav className="flex gap-4 items-center">
                    {user ? (
                        <>
                            {user.role === 'admin' && (
                                <Link to="/admin" className="hover:underline">
                                    Admin Dashboard
                                </Link>
                            )}
                            {user.role === 'user' && (
                                <Link to="/user" className="hover:underline">
                                    User Dashboard
                                </Link>
                            )}
                            {user.role === 'store-owner' && (
                                <Link to="/store-owner" className="hover:underline">
                                    Store Owner Dashboard
                                </Link>
                            )}
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:underline">
                                Login
                            </Link>
                            <Link to="/register" className="hover:underline">
                                Register
                            </Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link to="/categories" className="text-white hover:text-gray-400">Categories</Link>
                    <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
                </div>
                
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-2 py-1 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Search
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;

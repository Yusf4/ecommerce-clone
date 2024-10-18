import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BagContext } from './contexts/BagContext';
import { SearchContext } from './contexts/SearchContext';
import AuthContext from './contexts/AuthContext';

const Header = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const icon = `${url}images/shoppingBag.svg`;
  const { user } = useContext(AuthContext);
  const { items } = useContext(BagContext);
  const [categories, setCategories] = useState([]);
  const { setQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');

  const searchQuery = () => {
    setQuery(inputValue);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`${url}api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.log('Failed categories fetching for header');
      }
    };
    getCategories();
  }, []);

  const scrollCategories = (direction) => {
    const container = document.getElementById('category-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <header className="bg-blue-700 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left-side navigation links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
        </div>

        {/* Category scrolling area */}
        <div className="flex-1 relative">
          {categories.length > 0 && (
            <div className="flex items-center">
              {/* Category container with horizontal scroll */}
              <div
                id="category-container"
                className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 mx-4"
              >
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/categories/${category.name}/${category.id}`}
                    className="text-white hover:text-gray-400 whitespace-nowrap"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              {/* Scroll Buttons */}
              <div className="flex items-center">
                {/* Left Scroll Button */}
                <button
                  onClick={() => scrollCategories('left')}
                  className=" bg-gray-400 bg-opacity-50 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-80 focus:outline-none"
                >
                  &lt;
                </button>

                {/* Right Scroll Button */}
                <button
                  onClick={() => scrollCategories('right')}
                  className="bg-gray-400 bg-opacity-50 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-opacity-80 focus:outline-none ml-2"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right-side search, bag icon, and buttons */}
        <div className="flex items-center space-x-6">
          {/* Search input and button */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search..."
              className="px-3 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={searchQuery}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>

          {/* Bag icon with counter */}
          <Link to="/Bag">
            <button className="relative">
              <img className="w-6 h-6 filter invert" src={icon} alt="Bag" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items}
              </span>
            </button>
          </Link>

          {/* Login and Register buttons */}
          {user ? (
            <Link
              to="/logout"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

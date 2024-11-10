import React, { useRef, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BagContext } from "./contexts/BagContext";
import { SearchContext } from "./contexts/SearchContext";
import AuthContext from "./contexts/AuthContext";

const Header = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const icon = `${url}images/shoppingBag.svg`;
  const { user } = useContext(AuthContext);
  const token=localStorage.getItem('authToken');
  const { items } = useContext(BagContext);
  const [categories, setCategories] = useState([]);
  const { setQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");
  const [dropdownState, setDropdownState] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setDropdownState(!dropdownState);

  useEffect(() => {
    console.log("token:"+token);
    console.log("user:"+user);
    const getCategories = async () => {
      try {
        const response = await axios.get(`${url}api/categories`);
        setCategories(response.data);
      } catch (error) {
        console.log("Failed categories fetching for header");
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchQuery = (query) => {
    setQuery(query);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim()) {
      searchQuery(value);
    } else {
      setQuery("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || inputValue.trim()) {
      searchQuery(inputValue);
    }
  };

  const [startIndex, setStartIndex] = useState(0);
  const visibleCategoriesCount = 3;
  const scrollCategories = (direction) => {
    let newStartIndex = startIndex;

    if (direction === "right") {
      newStartIndex = Math.min(startIndex + 1, categories.length - visibleCategoriesCount);
    } else {
      newStartIndex = Math.max(startIndex - 1, 0);
    }

    setStartIndex(newStartIndex);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Left-side logo and categories */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-3xl font-bold text-gray-800">
            Eshop
          </Link>

          {/* Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-sm font-medium text-gray-800 flex items-center">
              <span>Categories</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownState && (
              <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="py-1 text-sm">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`/categories/${category.name}/${category.id}`} onClick={() => setDropdownState(false)} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Categories */}
        <div className="relative flex items-center ml-6">
          <div className="flex overflow-x-auto space-x-6" id="category-container">
            {categories.slice(startIndex, startIndex + visibleCategoriesCount).map((category) => (
              <Link key={category.id} to={`/categories/${category.name}/${category.id}`} className="text-gray-800 hover:bg-gray-200 py-2 px-4 rounded-md whitespace-nowrap">
                {category.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-shrink-0 space-x-2 ml-2">
            <button onClick={() => scrollCategories("left")} className="text-gray-800 hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full" disabled={startIndex === 0}>
              &lt;
            </button>
            <button onClick={() => scrollCategories("right")} className="text-gray-800 hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full" disabled={startIndex + visibleCategoriesCount >= categories.length}>
              &gt;
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <input type="text" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="Search for products, categories, brands..." className="px-4 py-2 rounded-full border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-6">
          {/* Dashboard Button for Admins */}
          {user && user.role === "admin" && (
            <Link to="/dashboard" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
              Dashboard
            </Link>
          )}

          {/* User Authentication */}
          {user ? (
            <Link to="/logout" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
              Logout
            </Link>
          ) : (
            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
              Sign in
            </Link>
          )}

          {/* Shopping Bag Icon */}
          <Link to="/Bag">
            <button className="relative">
              <img className="w-6 h-6" src={icon} alt="Bag" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {items}
              </span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BagContext } from "./contexts/BagContext";
import { SearchContext } from "./contexts/SearchContext";
import AuthContext from "./contexts/AuthContext";

const Header = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const icon = `${url}images/shoppingBag.svg`;
  const { user } = useContext(AuthContext);
  const { items } = useContext(BagContext);
  const [categories, setCategories] = useState([]);
  const { setQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
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

  const searchQuery = (query) => {
    setQuery(query);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Trigger the search when the input changes (debounced)
    if (value.trim()) {
      searchQuery(value);
    } else {
      setQuery(''); // Clear results if input is empty
    }
  };
  const handleKeyDown = (e) => {
    // Trigger the search when Enter key is pressed
    if (e.key === "Enter" || inputValue.trim() ) {
      searchQuery(inputValue);
    }
  };


  const scrollCategories = (direction) => {
    const container = document.getElementById("category-container");
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0  z-50 ">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left-side logo and categories */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            <span className="font-bold">Eshop</span>
          </Link>

          <div className="flex overflow-x-auto space-x-6" id="category-container">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.name}/${category.id}`}
                className="text-gray-800 hover:bg-gray-200 py-2 px-4 rounded-md whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Scroll buttons */}
          <div className="flex items-center">
            <button
              onClick={() => scrollCategories("left")}
              className="text-gray-800 hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full ml-2"
            >
              &lt;
            </button>

            <button
              onClick={() => scrollCategories("right")}
              className="text-gray-800 hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full ml-2"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Centered search bar */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange} // Trigger search as user types
            onKeyDown={handleKeyDown} // Trigger search when Enter key is pressed
            placeholder="Search for products, categories, brands..."
            className="px-4 py-2 rounded-full border border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right-side user account and cart */}
        <div className="flex items-center space-x-6">
          {/* User Authentication */}
          {user ? (
            <Link
              to="/logout"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
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

import React, { useContext,useState } from 'react';

import { Link } from 'react-router-dom';
import { BagContext } from './contexts/BagContext';
import { SearchContext } from './contexts/SearchContext';

const Header = () => {
    const url=process.env.REACT_APP_BACKEND_URL;
    const icon=`${url}images/shoppingBag.svg`;
    const {items}=useContext(BagContext);
    const {setQuery}=useContext(SearchContext);
    const[inputValue,setInputValue]=useState('');
    const searchQuery=()=>{
      setQuery(inputValue);
    }


       
    return (
        <header className="bg-gray-800 p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <Link to="/" className="text-white hover:text-gray-400">Home</Link>
              <Link to="/categories" className="text-white hover:text-gray-400">Categories</Link>
              <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
               <Link to="/register" className="text-white hover:text-gray-400">register</Link>
            </div>
      
            <div className="flex items-center space-x-4">
              <button className="relative">
                <img
                  className="w-6 h-6 filter invert"
                  src={icon}
                  alt="Bag"
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items}
                </span>
              </button>
      
              <input
                type="text"
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
                placeholder="Search..."
                className="px-2 py-1 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
      
              <button 
              onClick={searchQuery}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
              </button>
            </div>
          </nav>
        </header>
      );
      
    }
export default Header;

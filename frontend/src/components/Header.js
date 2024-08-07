import React from 'react';
import { Link } from 'react-router-dom'; 

const Header=()=>{
    return (
        <header>
           <nav>
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About Us</Link>
            
            <div className='search-bar'>
                <input 
                type='text'
                placeholder='search...'/>
                <button>search</button>
            </div>
         </nav> 
    </header>
    )
}

export default Header;
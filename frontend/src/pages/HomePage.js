import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import AuthContext from '../components/contexts/AuthContext';
import { SearchContext } from '../components/contexts/SearchContext';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    
    const {query}=useContext(SearchContext);
    const{user,setFlashMessage,flashMessage}=useContext(AuthContext);
    const[filteredProducts,setFilteredProducts]=useState([]);
    const url=process.env.REACT_APP_BACKEND_URL;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${url}api/products`);
                setProducts(response.data);
                setFilteredProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [url]);
    useEffect(()=>{
        const filtered=products.filter(product=>(
    product.name.toLowerCase().includes(query.toLowerCase())
   ));
   setFilteredProducts(filtered);  
    },[query,products])

    useEffect(() => {
        if (flashMessage) {
            const timer = setTimeout(() => setFlashMessage(''), 5000); // Clear after 5 seconds
            return () => clearTimeout(timer); // Cleanup timer on unmount
        }
    }, [flashMessage, setFlashMessage]);

    const getFlashMessageStyle = () => {
        if (user) {
            // User is logged in
            return {
                backgroundColor: '#10b981', // Tailwind's 'green-500'
            };
        } else {
            // User is logged out
            return {
                backgroundColor: '#ef4444', // Tailwind's 'red-500'
            };
        }
    };
  
    return (
        <div>
            <Header />
            <main>
            {flashMessage && (
                    <div
                        className={`flash-message fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-md text-white text-sm flex items-center animate-flash`}
                        style={{
                            ...getFlashMessageStyle(),
                            maxWidth: '250px',
                            zIndex: 1000,
                        }}
                    >
                        <div className="flex-grow">
                            <strong>{user ? 'Success:' : 'Error:'} </strong>
                            <span>{flashMessage}</span>
                        </div>
                        <button
                            onClick={() => setFlashMessage('')}
                            className="text-lg ml-4 focus:outline-none"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                )}
                <section className='hero text-center py-8'>
                    <h1 className='text-4xl font-bold'>Welcome to our Ecommerce site</h1>
                    <p className='mt-4 text-lg'>Find your favorite products at great prices!</p>
                </section>
                <section className='featured-products py-8'>
                    <h2 className='text-3xl font-semibold mb-6'>Featured Products</h2>
                    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
                
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

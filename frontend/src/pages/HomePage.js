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

 
  
    return (
        <div>
            <Header />
            <main>
            {flashMessage && (
                    <div className="flash-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-4xl mx-auto mt-4">
                        <strong className="font-bold">Success! </strong>
                        <span className="block sm:inline">{flashMessage}</span>
                        <button
                            onClick={() => setFlashMessage('')}  // Clear the flash message on close
                            className="absolute top-0 bottom-0 right-0 px-4 py-3"
                        >
                            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <title>Close</title>
                                <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 00-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 001.414 1.414L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z" />
                            </svg>
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

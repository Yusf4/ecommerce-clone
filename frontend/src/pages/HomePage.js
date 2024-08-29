import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const url=process.env.REACT_APP_BACKEND_URL;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${url}api/products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <Header />
            <main>
                <section className='hero text-center py-8'>
                    <h1 className='text-4xl font-bold'>Welcome to our Ecommerce site</h1>
                    <p className='mt-4 text-lg'>Find your favorite products at great prices!</p>
                </section>
                <section className='featured-products py-8'>
                    <h2 className='text-3xl font-semibold mb-6'>Featured Products</h2>
                    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map(product => (
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

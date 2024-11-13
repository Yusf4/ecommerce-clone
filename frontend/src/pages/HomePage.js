import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import AuthContext from '../components/contexts/AuthContext';
import { SearchContext } from '../components/contexts/SearchContext';
import { motion } from 'framer-motion';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const { query } = useContext(SearchContext);
    const { user, setFlashMessage, flashMessage } = useContext(AuthContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const url = process.env.REACT_APP_BACKEND_URL;

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

    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [query, products]);

    useEffect(() => {
        if (flashMessage) {
            const timer = setTimeout(() => setFlashMessage(''), 5000); // Clear after 5 seconds
            return () => clearTimeout(timer); // Cleanup timer on unmount
        }
    }, [flashMessage, setFlashMessage]);

    const getFlashMessageStyle = () => {
        if (user) {
            return {
                backgroundColor: '#10b981', // Green for logged-in
            };
        } else {
            return {
                backgroundColor: '#ef4444', // Red for logged-out
            };
        }
    };

    return (
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100 min-h-screen">
            <Header />

            {/* Flash Message */}
            {flashMessage && (
                <motion.div
                    className="flash-message text-white text-center py-3 mb-4 rounded"
                    style={getFlashMessageStyle()}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {flashMessage}
                </motion.div>
            )}

            <main className="px-4 md:px-16 lg:px-32 py-12">
                <section className="hero text-center py-12">
                    <motion.h1
                        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to our E-commerce Site
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Find your favorite products at great prices!
                    </motion.p>
                </section>

                <section className="featured-products py-12">
                    <motion.h2
                        className="text-4xl font-semibold text-gray-900 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Featured Products
                    </motion.h2>

                    <motion.div
                        className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    delayChildren: 0.3,
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                                className="transform transition-all duration-300"
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;

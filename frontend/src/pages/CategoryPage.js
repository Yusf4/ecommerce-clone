import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const CategoryPage = () => {
    const { name, id } = useParams();
    const [products, setProducts] = useState([]);
    const url = process.env.REACT_APP_BACKEND_URL;
  const fullU = `${url}api/categories/${id}`;
//console.log("fullU:"+fullU);
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(fullU);
                setProducts(response.data);
            } catch (error) {
                console.error("No category found:", error);
            }
        };
        fetchCategory();
    }, [id]);

    if (!products) return <div>... loading</div>;

    return (
        <div>
            <Header />
            <section className="category-section py-12 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-purple-100 via-blue-100 to-purple-100">
                <motion.h2
                    className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {name} Products
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
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
                            className="transition-transform duration-300"
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
            <Footer />
        </div>
    );
};

export default CategoryPage;

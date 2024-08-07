import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const HomePage=()=>{
    const[products,setProducts]=useState([]);
    useEffect(()=>{
    const fetchProducts=async()=>{
        try{
            const response =await axios.get('/api/products');
            setProducts(response.data);
        }
        catch(error){
            console.error('Error fetching products:',error);
        }
    };
    fetchProducts();
    },[])
    return (
        <div>
            <Header/>
            <main>
                <section className='hero'>
                <h1>Welcome to our Ecommerce site</h1>
                <p>find your favorite product at great prices!</p>
                </section>
                <section className='featured-products'>
                <h2>Featured Products</h2>
                <div className="product-list">
                {products.map(product=>(
                    <ProductCard key={product.id} product={product}/>
                ))};
                </div>
                </section>
            </main>
        </div>
    );
};
 export default HomePage;
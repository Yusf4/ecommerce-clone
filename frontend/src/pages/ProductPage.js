import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage=()=>{
    const { id }=useParams();
    const[product, setProduct]=useState(null);
    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                const response= await axios.get(`/api/products/${id}`);
                setProduct(response.data);

            }
            catch(error){
                console.error('Error fetching product:',error);
            }
        };
        fetchProduct();

    },[id]);

    if (!product) return <div>Loading...</div>;
    return (
        <div>
            <Header/>
            <main>
                <h1>{product.name}</h1>
                <img src={product.imageUrl} alt={product.name}/>
                <p>${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
            </main>
            <Footer />
        </div>
    )
}
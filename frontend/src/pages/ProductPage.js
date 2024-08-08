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
        fethcProduct();

    },[id]);
}
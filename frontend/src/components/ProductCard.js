import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard=()=>{
    return (
        <div className="product-card">
        <Link to={`/product/${product.id}`}>
        <img src={product.imageUrl} alt={product.name}/>
        <h3>{product.name}</h3>
        <p>{product.price.toFixed(2)}</p>
        
        
        </Link>
        </div>
    )
}
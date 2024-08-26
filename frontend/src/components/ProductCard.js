import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard=({product})=>{
    const imageUrl=process.env.REACT_APP_BACKEND_URL+product.image;
 
    return (
        
        <div className="product-card">
            <h1>{imageUrl}</h1>
        <Link to={`/product/${product.id}`}>
        <img src={imageUrl} alt={product.name}/>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        
        
        </Link>
        </div>
    )
}
export default ProductCard;
import React  from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BagContext } from './contexts/BagContext';
import Addbutton from './Addbutton';
const ProductCard = ({ product }) => {
  const imageUrl = process.env.REACT_APP_BACKEND_URL + product.image;
  const {bag,addToBag}=useContext(BagContext);
  return (
    <div className="product-card max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img className="w-full h-48 object-cover" src={imageUrl} alt={product.name} />
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-700 text-base">${product.price}</p>
          <Addbutton product={product} addToBag={addToBag} />
        </div>
      </Link>
    
    </div>
  );
};

export default ProductCard;

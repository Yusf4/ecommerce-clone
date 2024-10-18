import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BagContext } from './contexts/BagContext';
import Addbutton from './Addbutton';

const ProductCard = ({ product }) => {
  const { bag, addToBag } = useContext(BagContext);

  return (
    <div className="product-card relative bg-white shadow-lg rounded-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <Link to={`/product/${product.id}`}>
        {/* Image section */}
        <div className="relative">
          <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
          {/* Hover effect with discount or other details */}
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            SALE
          </div>
        </div>

        {/* Product details */}
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-sm mb-1 truncate">{product.name}</h3>
         <p className="text-gray-600 text-s mb-4 py-1"> {product.price}$</p>
         {/* <p className="text-gray-900 font-bold text-base">${product.price}</p>*/} 
        </div>
      </Link>

      {/* Add to Bag button */}
      <div className="absolute bottom-2 left-2 right-2">
        <Addbutton product={product} addToBag={addToBag} isProductPage={false} />
      </div>
    </div>
  );
};

export default ProductCard;

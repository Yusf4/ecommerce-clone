import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const imageUrl = process.env.REACT_APP_BACKEND_URL+category.image;
   
   console.log(imageUrl);
   console.log(category.id);
  return (
    <Link to={`/categories/${category.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src={imageUrl} alt={category.name} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

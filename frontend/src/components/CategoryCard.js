import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

  return (
    <Link to={`/categories/${category.name}/${category.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img src={category.image} alt={category.name} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
          <p className="text-gray-600 mt-2">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

import React, { useContext, useEffect } from 'react';
import { BagContext } from './contexts/BagContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
const OrderSummary = () => {
   
  const HOST = process.env.REACT_APP_BACKEND_URL;
  const {user}=useContext(AuthContext);
  const { bag, totalPrice } = useContext(BagContext);
  
     const [url,setUrl]=useState('');
    useEffect(()=>{
      setUrl(user ? '/payment':'/login');
    },[user]);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Order Summary</h3>
      <ul className="space-y-2">
        {bag.map((item, index) => (
          <li key={index} className="flex items-center">
            <img
              src={HOST + item.product.image}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="ml-4">
              <h4 className="text-md font-medium">{item.product.name}</h4>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <div className="ml-auto text-lg font-semibold">${item.product.price * item.quantity}</div>
          </li>
        ))}
      </ul>
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold">Total: ${totalPrice}</h3>
      </div>
      
    <Link to={url} >
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Proceed to Payment
      </button>
      </Link>
     
     
    </div>
  );
};

export default OrderSummary;

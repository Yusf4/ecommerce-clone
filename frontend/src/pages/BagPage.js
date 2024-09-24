import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BagContext } from '../components/contexts/BagContext';

const BagPage = () => {

    const HOST=process.env.REACT_APP_BACKEND_URL;
  const { bag } = useContext(BagContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Items in Your Bag</h2>
        {bag.length === 0 ? (
          <p className="text-gray-600 text-center">Your bag is empty</p>
        ) : (
          <ul className="space-y-6">
            {bag.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-md"
              >
                {/* Product Image */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={HOST+item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Product Name and Price */}
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>

                {/* Product Price */}
                <div className="text-lg font-semibold text-gray-800">${item.price}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default BagPage;



/*import React, { useEffect, useState,useContext} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Addbutton from '../components/Addbutton';
import { BagContext } from '../components/contexts/BagContext';

const BagPage=()=>{

    const HOST=process.env.REACT_APP_BACKEND_URL;
    const {bag}=useContext(BagContext);
    
return(
    <div>
       <Header/>
       <section className="w-full mt-8">
       <h2 className="text-2xl font-semibold mb-4">Items in your Bag</h2>
    {
        bag.length===0 ?(
            <p className="text-gray-600">Your bag is empty</p>
    ):(
        <ul className="space-y-2">
        {bag.map((item,index)=>(
            <li
            key={index}
            className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
            <span>{item.name}</span>
            <span className="font-semibold">${item.price}</span>
          </li>
    ))}
      </ul>
    )}  
    </section>

   <Footer/>
    </div>

)
}
export default BagPage;*/
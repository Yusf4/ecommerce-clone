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
                    src={HOST+item.product.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Product Name and Price */}
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold">{item.product.name}</h3>
                </div>
               {/* Product quantity*/}
               <div className="ml-4 flex items-center space-x-2">
                  <span className="text-lg font-semibold">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      className="px-2 py-1 text-gray-600 focus:outline-none hover:bg-gray-100"
                      // Add your logic for decreasing quantity
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                    <button
                      className="px-2 py-1 text-gray-600 focus:outline-none hover:bg-gray-100"
                      // Add your logic for increasing quantity
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* Product Price */}
                <div className="text-lg font-semibold text-gray-800">${item.product.price}</div>
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



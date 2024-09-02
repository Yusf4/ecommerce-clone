import React, { useEffect, useState,useContext} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Addbutton from '../components/Addbutton';
import { BagContext } from '../components/contexts/BagContext';
const ProductPage=()=>{
    const HOST=process.env.REACT_APP_BACKEND_URL;
    const{bag,addToBag}=useContext(BagContext);
     
    const { id }=useParams();
    const[product, setProduct]=useState(null);
   /* console.log("bag:" ,bag);
    
     console.log("addtoBag",addToBag)*/
    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                console.log(id);
                const response= await axios.get(`${HOST}api/products/${id}`);
                setProduct(response.data);
                console.log(response.data);

            }
            catch(error){
                console.error('Error fetching product:',error);
            }
        };
        fetchProduct();

    },[id]);
   


    if (!product) return <div>Loading...</div>;
    
    return (
        <div>
            <Header/>
            <main>
            <div className="max-w-4xl mx-auto p-8 flex flex-col items-center">
  <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
    {product.name}
  </h1>

  <img
    src={HOST + product.image}
    alt={product.name}
    className="w-full max-w-md mb-6 rounded-lg shadow-lg"
  />

  <p className="text-2xl font-semibold text-red-500 mb-4">${product.price}</p>

  <p className="text-lg text-gray-700 mb-6 text-center">
    {product.description}
  </p>

  <Addbutton product={product} addToBag={addToBag} className="mb-8" />

  <section className="w-full mt-8">
    <h2 className="text-2xl font-semibold mb-4">Items in your Bag</h2>

    {bag.length === 0 ? (
      <p className="text-gray-600">Your bag is empty</p>
    ) : (
      <ul className="space-y-2">
        {bag.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
          >
            <span>{item.name}</span>
            <span className="font-semibold">${item.price}</span>
          </li>
        ))}
      </ul>
    )}
  </section>
</div>

            </main> 
            <Footer />
        </div>
    )
}

export default ProductPage;
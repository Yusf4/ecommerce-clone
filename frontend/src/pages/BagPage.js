import React, { useEffect, useState,useContext} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Addbutton from '../components/Addbutton';
import { BagContext } from '../components/contexts/BagContext';

const BagPage=()=>{
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
export default BagPage;
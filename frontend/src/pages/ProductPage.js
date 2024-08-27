import React, { useEffect, useState,useContext} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Addbutton from '../components/Addbutton';
import { BagContext } from '../components/contexts/BagContext';
const ProductPage=()=>{
    const{bag,addToBag}=useContext(BagContext);

    const { id }=useParams();
    const[product, setProduct]=useState(null);
    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                const response= await axios.get(`/api/products/${id}`);
                setProduct(response.data);

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
                <h1>{product.name}</h1>
               

                <img src={product.imageUrl} alt={product.name}/>
                <p>${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
                 <Addbutton product={product} addToBag={addToBag}/>
            <section>
                <h2>Items in your Bag</h2>
                {bag.length===0 ?(
                    <p>your bag is empty</p>
                ):(
 <ul>
                   {bag.map((item,index)=>(
                    <li key={index}>{item.name}-{item.price}</li>
                ))}
                   </ul>
                )}
               
             
            </section>
            </main> 
            <Footer />
        </div>
    )
}

export default ProductPage;
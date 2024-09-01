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
                <h1>{product.name}</h1>
               

                <img src={HOST+product.image} alt={product.name}/>
                <p>${product.price}</p>
                <p>{product.description}</p>
                 <Addbutton product={product} addToBag={addToBag}/>
            <section>
                <h2>Items in your Bag</h2>
                {bag.length===0 ?(
                    <p>your bag is empty</p>
                ):(
 <ul>
                   {bag.map((item,index)=>(
                    <li key={index}>{item.name}-${item.price}</li>
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
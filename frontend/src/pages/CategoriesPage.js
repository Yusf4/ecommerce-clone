import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';


 
 
 
 const CategoriesPage =()=>{
    const [categories,setCategories]=useState([]);
    const url=process.env.REACT_APP_BACKEND_URL;
   
    useEffect(()=>{
        const fetchCategories=async()=>{
    try{
        const response=await axios.get(`${url}api/categories`);
        setCategories(response.data);
    }
    catch(error){
        console.error("no categories found",error);
    }
  } ; 
   fetchCategories();
    },[]);
    
   
   
    return (

        <div>
            <div>
                {categories.map(category=>(
                    <CategoryCard key={category.id} category={category}/>
                ))}
            </div>
            
        </div>

    )

  



}
export default CategoriesPage;
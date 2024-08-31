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
        <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );

   

  



}
export default CategoriesPage;
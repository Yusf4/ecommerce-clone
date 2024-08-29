import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

 
 
 
 const CategoriesPage=()=>{
    cosnt [categories,setCategories]=useState([]);
    const url=process.env.REACT_APP_BACKEND_URL;
    useEffect(()=>{
        const fetchCategories=async()=>{
    try{
        const response=await axios.get(url+'api/categories');
        setCategories(response.data);
    }
    catch(error){
        console.error("no categories found",error);
    }
  }  
   fetchCategories();
    },[]);
   
    if(!categories) return <div>...Loading</div>
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
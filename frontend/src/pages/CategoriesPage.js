import { useEffect } from "react";

 
 
 
 const CategoriesPage=()=>{
    const url=process.env.REACT_APP_BACKEND_URL;
    useEffect(()=>{
        const fetchCategories=async()=>{
    try{
        const response=await axios.get(url+'/categories');
        const categories=response.data;
    }
    catch(error){
        console.error("no categories found",error);
    }
  }  
    },[]);
    if(!categories) return <div>...Loading</div>
    return (
        <div>
            <h2>{category.name}</h2>
            <h3>{category.description}</h3>
        </div>

    )

  



}
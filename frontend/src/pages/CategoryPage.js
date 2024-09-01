import { useEffect ,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import Header from "../components/Header";


const CategoryPage=()=>{
     const{id}=useParams();
    const [category,setCategory]=useState(null);
    const url=process.env.REACT_APP_BACKEND_URL;
    const fullU=url+`api/categories/${id}`;
useEffect(()=>{
  const fetchCategory=async()=>{
try{
    const response=await axios.get(fullU);
    setCategory(response.data);
}
catch(error){
    console.error("no category found:",error)
}
}
fetchCategory();
 
   
},[id]);
  if (!category) return <div>... loading</div>;
  return (
   <div>
    <Header/>
   <div> {category.name}</div>
   <div> {category.description}</div>
</div>
  )
}
export default CategoryPage;
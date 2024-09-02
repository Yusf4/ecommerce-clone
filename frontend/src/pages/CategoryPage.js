import { useEffect ,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
const CategoryPage =()=>{
 
     const{name,id}=useParams();
     console.log(id);
    
    const [products,setProducts]=useState([]);
    const url=process.env.REACT_APP_BACKEND_URL;
    const fullU=url+`api/categories/${id}`;
  
useEffect(()=>{
  const fetchCategory=async()=>{
try{
    const response=await axios.get(fullU);
    setProducts(response.data);
   
   
    
}
catch(error){
    console.error("no category found:",error)
}
};
fetchCategory();
 
   
},[id]);
if (!products) return <div>... loading</div>;

  return (

    <div>
          <Header />
     <section className='featured-products py-8'>
                    <h2 className='text-3xl font-semibold mb-6'>{name} Products</h2>
                    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
                <Footer />
 </div>
   )


  
}
export default CategoryPage;
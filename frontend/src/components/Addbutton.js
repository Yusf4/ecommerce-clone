import React from "react";
import { Link } from "react-router-dom";
const Addbutton=({product,addToBag,isProductPage})=>{
    return (
        <div>
    {isProductPage ?(
 <button
 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
 onClick={()=>addToBag(product)}
 >
     Add to Bag
 </button>
    ):(
        <Link to={`/product/${product.id}`}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          View Product
        </Link>
      )}
    
       
        </div>
    )


}
export default Addbutton;
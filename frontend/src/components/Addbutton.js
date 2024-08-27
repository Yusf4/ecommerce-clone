import React from "react";
const Addbutton=({product,addToBag})=>{
    return (
        <div>
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={()=>addToBag(product)}
        >
            Add to Bag
        </button>
        </div>
    )


}
export default Addbutton;
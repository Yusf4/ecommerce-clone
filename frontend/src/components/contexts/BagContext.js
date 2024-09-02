import React,{createContext,useEffect,useState} from "react";

export const BagContext=createContext();
export const BagProvider=({children})=>{
    const[bag,setBag]=useState([]);
    const [items,setItems]=useState(0);
    const addToBag=(product)=>{
     setBag([...bag,product]);
    }
    useEffect(()=>{
 setItems(bag.length);
    },[bag]);
   
    return (
        <BagContext.Provider value={{bag,addToBag,items}}>
          {children}
        </BagContext.Provider>
    )
}
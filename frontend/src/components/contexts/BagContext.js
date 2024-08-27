import React,{Children, createContext,useState} from "react";

export const BagContext=createContext();
export const BagProvider=({children})=>{
    const[bag,setBag]=useState([]);
    const addToBag=(product)=>{
     setBag([...bag,product]);
    }
    return (
        <BagContext.Provider value={{bag,addToBag}}>
          {children}
        </BagContext.Provider>
    )
}
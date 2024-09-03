import { useState,useContext, createContext } from "react";
import React from "react";
export const SearchContext=createContext();
export const SearchProvider=({children})=>{
    const [query,setQuery]=useState('');

return (
    <SearchContext.Provider value={{query,setQuery}}>
        {children}
    </SearchContext.Provider>
)
}
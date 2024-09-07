import { createContext,useState,useEffect } from "react";
import axios from "axios";
const AuthContext=createContext();
export  const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    useEffect(()=>{
    const fetchUser=async ()=>{
    try{
        const response=await axios.get('/user');
        setUser(response.data);
    }
    catch(error){
        setUser(null);
  console.error("fetching user failed",error);
    }
    }
    fetchUser();
},[]);
const login=async(credentials)=>{
    const response=await axios.post('/login',credentials);
    setUser(response.data);
};
const logout= async ()=>{
    await axios.post('/logout');
    setUser(null)
};
return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};
export default AuthContext;
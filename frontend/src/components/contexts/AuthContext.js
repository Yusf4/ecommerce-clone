import { createContext,useState,useEffect } from "react";
import axios from "axios";
//import axios from "../../axiosConfig";
const AuthContext=createContext();
export  const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    useEffect(()=>{
    const fetchUser=async ()=>{
    try{
        const response=await axios.get('http://127.0.0.1:8000/api/user');
        setUser(response.data);
    }
    catch(error){
        setUser(null);
  console.error("fetching user failed",error);
    }
    };
    fetchUser();
},[]);
const login=async(credentials)=>{
    const response=await axios.post('http://127.0.0.1:8000//login',credentials);
    console.log(response.data);
    setUser(response.data.user);
    
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
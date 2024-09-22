import { createContext,useState,useEffect } from "react";
import axios from "axios";
//import axios from "../../axiosConfig";
const AuthContext=createContext();
export  const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
    const fetchUser=async ()=>{
    try{
        console.log("Hello user");
        const token=localStorage.getItem('authToken');
        console.log(token);
        if(token){
            
             const response=await axios.get('http://127.0.0.1:8000/api/user',{
                headers:{
               Authorization:`Bearer ${token}`,  
                }
             });
        console.log("fetched user successfully");
        setUser(response.data); 
        }
        else{
            setUser(null);
        }
      
    }
    catch(error){
        setUser(null);
  console.error("fetching user failed",error);
    }
    finally{
        setLoading(false);
    }
    };
    fetchUser();
},[]);
const login=async(credentials)=>{
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    //Proceed with login request
    const response = await axios.post('http://127.0.0.1:8000/api/testLogin', credentials);
    console.log(response.data);
    setUser(response.data.user);
    localStorage.setItem('authToken', response.data.token); 
   
};
const logout= async ()=>{
    const tok=localStorage.getItem('authToken');
   
    await axios.post('http://127.0.0.1:8000/api/testLogout',{},{
      headers: {
        Authorization: `Bearer ${tok}`,
      }
    });
    setUser(null);
    localStorage.removeItem('authToken');
    console.log("logout successfully");
};
return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
);
};
export default AuthContext;
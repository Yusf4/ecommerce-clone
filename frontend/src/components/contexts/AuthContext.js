import { createContext,useState,useEffect } from "react";
import axios from "axios";
//import axios from "../../axiosConfig";
const AuthContext=createContext();
export  const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    const[token,setToken]=useState(null);
    const[loading,setLoading]=useState(true);
    const [flashMessage,setFlashMessage]=useState('');
    useEffect(()=>{
    const fetchUser=async(e)=>{
    try{
        
        const token=localStorage.getItem('authToken');
      
        if(token){
            
             const response=await axios.get('http://127.0.0.1:8000/api/user',{
                headers:{
               Authorization:`Bearer ${token}`,  
                }
             });
        console.log("fetched user successfully");
        setUser(response.data.user); 
    
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
//Register request
const register=async(credentials)=>{
    try{
       const response=await axios.post('http://127.0.0.1:8000/api/register');  
    }
    catch(error){
        console.error("registration")
    }
 
  
}




//login request

const login=async(credentials)=>{
    
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    //Proceed with login request
    const response = await axios.post('http://127.0.0.1:8000/api/testLogin', credentials);
    setFlashMessage("logged in successfully");
    console.log(response.data.user);
    setUser(response.data.user);
    console.log(response.data.user.role);
    localStorage.setItem('authToken', response.data.token); 
   
   
};

//logout request
const logout= async ()=>{
    const tok=localStorage.getItem('authToken');
   
    await axios.post('http://127.0.0.1:8000/api/testLogout',{},{
      headers: {
        Authorization: `Bearer ${tok}`,
      }
    });
    setFlashMessage("Goodbye");
    setUser(null);
    localStorage.removeItem('authToken');
    console.log("logout successfully");
};
return (
    <AuthContext.Provider value={{user,token,login,logout,setFlashMessage,flashMessage}}>
        {children}
    </AuthContext.Provider>
);
};
export default AuthContext;
import { createContext,useState,useEffect } from "react";
import axios from "axios";
//import axios from "../../axiosConfig";
const AuthContext=createContext();
export  const AuthProvider=({children})=>{
    const[user,setUser]=useState(null);
    const[token,setToken]=useState(localStorage.getItem('authToken'));
    const [flashMessage,setFlashMessage]=useState('');
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("authToken");

            if (token) {
                try {
                    const response = await axios.get("http://127.0.0.1:8000/api/user", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    //console.log("fetching user test:"+response.data.email);
                    setUser(response.data); // Set user data
                } catch (error) {
                    console.error("Failed to fetch user:", error);
                    setUser(null);
                }
            } else {
                setUser(null);
            }

        };

        fetchUser();
    }, []);





const login=async(credentials)=>{
    
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    //Proceed with login request
    const response = await axios.post('http://127.0.0.1:8000/api/testLogin', credentials);
    setFlashMessage("logged in successfully");
    setUser(response.data.user);
    setToken(response.data.token);
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
    setToken(null);
    localStorage.removeItem('authToken');
};
return (
    <AuthContext.Provider value={{user,token,login,logout,setFlashMessage,flashMessage}}>
        {children}
    </AuthContext.Provider>
);
};
export default AuthContext;
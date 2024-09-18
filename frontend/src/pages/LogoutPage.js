import { useNavigate } from "react-router-dom"
import AuthContext from "../components/contexts/AuthContext";
import { useContext, useEffect } from "react";
const LogoutPage=()=>{
    const { logout }=useContext(AuthContext);
     const navigate=useNavigate();
     useEffect(()=>{
       const performLogout=async()=>{
       await logout();
         navigate('/');
     }  
     performLogout();
     },[logout,navigate]);
    
    return null;
     
}
export default LogoutPage;
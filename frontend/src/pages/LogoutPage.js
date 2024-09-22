import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../components/contexts/AuthContext";
import { useContext, useEffect } from "react";
const LogoutPage=()=>{
  
  const {logout}=useContext(AuthContext);
  const navigate=useNavigate();
 useEffect(()=>{
  const performLogout=async()=>{
try{
 await logout();
 navigate('/');

}  
catch(error){
  console.error('logout error',error);
}
  };
  performLogout();

 },[navigate]);
 
  /*const tok=localStorage.getItem('authToken');
  console.log("logout token:"+tok);
 // const navigate=useNavigate();
  await axios.post('http://127.0.0.1:8000/api/testLogout',{},{
    headers: {
      Authorization: `Bearer ${tok}`,
    }
  });
  //navigate('/');
 // setUser(null);
  
  localStorage.removeItem('authToken');
  return null;

    /*const { logout }=useContext(AuthContext);
     const navigate=useNavigate();
     useEffect(()=>{
       const performLogout=async()=>{
       await logout();
         navigate('/');
     }  
     performLogout();
     },[logout,navigate]);*/
    
    return null;
     
}
export default LogoutPage;
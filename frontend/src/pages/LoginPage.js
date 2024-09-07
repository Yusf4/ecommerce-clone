import axios from "axios";
import { useState,useContext } from "react";
import AuthContext from "../components/contexts/AuthContext";
const LoginPage=()=>{
    const[credentials,setCredentials]=useState(null);

    const {login}=useContext(AuthContext);
  const handleChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
  };
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
        const response=await login(credentials);
        alert('logged in successfully');
    }
    catch(error){
        console.error('login error',error);
    }
  }
  return (
   <div>
    <form onSubmit={handleSubmit}>
     <input type="email" name="email" placeholder="email"/>
     <input type="password" name="password" placeholder="password"/>
     <button type="submit" >Login</button>
    </form>
   </div>
  );
}
export default LoginPage;
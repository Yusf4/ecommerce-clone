import axios from "../axiosConfig";
import { useState,useContext } from "react";
import AuthContext from "../components/contexts/AuthContext";
const LoginPage=()=>{
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer my-token',
  };
    const[credentials,setCredentials]=useState({email:'',password:''});

    //const {login}=useContext(AuthContext);
  const handleChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
   console.log(credentials);
};
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      const response=await axios.post("http://127.0.0.1:8000/api/login",{
        email:'johntest@gmail.com',
        password:'securePassword'
      },headers);
      console.log(response.data);
      // await login(credentials);
        alert('logged in successfully');
    }
    catch(error){
        console.error('login error',error);
    }
  }
  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="email">
        <input type="email" name="email"  onChange={handleChange} placeholder="email"/>
        </label>
     <label htmlFor="password">
     <input type="password" name="password" onChange={handleChange} placeholder="password"/>
     </label>
    
     <button type="submit" >Login</button>
    </form>
   
  );
}
export default LoginPage;
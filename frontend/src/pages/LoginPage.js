/*import api from "../axiosConfig";
import { useState,useContext } from "react";
//import AuthContext from "../components/contexts/AuthContext";
const LoginPage=()=>{
 
    const[credentials,setCredentials]=useState({email:'',password:''});

    //const {login}=useContext(AuthContext);
  const handleChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
   console.log(credentials);
};
  const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
      await api.get('/sanctum/csrf-cookie');

     /* const response=await axios.post(
        "http://127.0.0.1:8000/api/testLogin",
        credentials,
          {withCredentials:true},
  );
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
export default LoginPage;*/
import api from '../axiosConfig';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("http://127.0.0.1:8000/sanctum/csrf-cookie");
      await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
       //Proceed with login request
       const response = await axios.post('http://127.0.0.1:8000/api/testLogin', credentials);
       console.log(response.data);
      alert('CSRF Cookie Set');
    } catch (error) {
      console.error('CSRF Cookie Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <input type="email" name="email" onChange={handleChange} placeholder="email" />
      </label>
      <label htmlFor="password">
        <input type="password" name="password" onChange={handleChange} placeholder="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;

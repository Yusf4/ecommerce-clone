import axios from "axios";
import {useContext,useState} from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthContext from "../components/contexts/AuthContext";
const RegisterPage=()=>{
    const HOST=process.env.REACT_APP_BACKEND_URL;
    console.log(`${HOST}api/register`);
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const [errorMessage,setErrorMessage]=useState('');
    const navigate=useNavigate();
    const {login}=useContext(AuthContext);
    const handleSubmit=async(e)=>{
        setErrorMessage('');
        e.preventDefault();
        try{
            console.log("before request");
           const response=await axios.post(`${HOST}api/register`,{
            name,
            email,
            password
           });

          
         
          await new Promise(resolve => setTimeout(resolve, 500));
           try{

           await login({email,password});
           setEmail("");
           setName("");
           setPassword("");
           navigate('/');
           console.log("register successfully",response.data);
           }
           catch(error){
            setErrorMessage('Account created,login failed try again with login Page');
            console.error("login failed",error);

           }
   
         
        }
        catch(error){
            setErrorMessage("Account already exists with this email. ")
            console.error("failed registration:",error);
                
        }
    }
    
    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create your account</h2>
    {errorMessage &&(
         <div className="bg-red-100 text-red-600 p-2 mb-4 text-center rounded-md">
         {errorMessage}
     </div>
    ) }
    <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input 
            type="text" 
            id="name" 
            value={name} 
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)} 
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
    </div>

    <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input 
            type="email" 
            id="email" 
            value={email} 
            placeholder="johndoe2024@gmail.com"
            onChange={(e) => setEmail(e.target.value)} 
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
    </div>

    <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        />
    </div>

    <div>
        <button 
            type="submit" 
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
            Register
        </button>
        <div className="mt-4 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link 
              to="/login" 
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              Login here
            </Link>
          </div>
    </div>
</form>

        </div>
    )
}
export default RegisterPage;
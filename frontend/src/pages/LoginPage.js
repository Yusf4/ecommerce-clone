
import { useCallback, useState ,useContext, useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AuthContext from '../components/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const {user,login}=useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage,setErrorMessage]=useState('');
  
 const navigate=useNavigate();
 useEffect(()=>{
  if(user){
  navigate('/');
  }
 },[user,navigate])
  const handleChange = (e) => {
  
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
   
    await login(credentials);
    console.log("login user:"+user);
    console.log("logged in successfully");
    } catch (error) {
      setErrorMessage(`Account doesn't exist,please check your credentials`);
      console.error('CSRF Cookie Error:', error);
    }
  };


  return (
    <div className="min-h-screen flex flex-col justify-between">
   
    <Header />

    <div className="flex flex-col items-center justify-center flex-grow">
    {errorMessage &&(
         <div className="bg-red-100 text-red-600 p-2 mb-4 text-center rounded-md">
         {errorMessage}
     </div>
    ) }
      <form 
        onSubmit={handleSubmit} 
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
      >
   
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            onChange={handleChange} 
            placeholder="email" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

  
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={handleChange} 
            placeholder="password" 
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>

 
    <Footer />
  </div>
  );
};

export default LoginPage;

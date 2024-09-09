import axios from 'axios';
import  React,{useState} from 'react';
import { login } from '../axiosConfig';
const LoginTry=()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await login(email, password);
          setMessage('Login successful');
      } catch (error) {
          setMessage('Invalid credentials');
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
          {message && <p>{message}</p>}
      </form>
  );
      
}


export default LoginTry;
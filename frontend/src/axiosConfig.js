/*import axios from "axios";
const api=axios.create({
    baseURL:'http://127.0.0.1:8000',
    withCredentials:true,
});
export const login=async(email,password)=>{
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    return  await api.post('/login',{email,password});
};
export default api;*/
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,
});
export const login=async(email,password)=>{
    await api.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    return  await api.post('/login',{email,password});
};
export default api;


import axios from "axios";
import {useContext,useState} from "react";
import Header from "../components/Header";
function Register(){
    const HOST=process.env.REACT_APP_BACKEND_URL;
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
           const response=await axios.post(`${HOST}api/register`,{
            name,
            email,
            password
           });
           console.log("register successfully",response.data);
        }
        catch(error){
            console.error("failed registration:",error);

        }
    }
    
    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <div>
                <label>name:</label>
               <input  type="text" value={name} placeholder="john doe" onChange={(e)=>setName(e.target.value)} required />
               </div>
               <div>
               <label>email:</label>
               <input  type="email" value={email} placeholder="johndoe2024@gmail.com" onChange={(e)=>setEmail(e.target.value)} required/>
               </div>
               <div>
                <label>password:</label>
                <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;
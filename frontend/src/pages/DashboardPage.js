import React, { useEffect, useState } from "react";
import axios from "axios";
const DashboardPage=()=>{
  const [users,setUsers]=useState([]);
  const url=process.env.REACT_APP_BACKEND_URL;
  const DeleteUser=()=>{

  }
  const changeRole=()=>{

  }

   useEffect(()=>{

    const fetchUsers=async()=>{
        try{
             const response=await axios.post(`${url}+api/users`); 
             console.log("users fetched:"+response.data);
             setUsers(response.data);
        }
        catch(error){
            console.error("users fetch failed:",error);
        }
        
    }
    fetchUsers();
   },[])
  return (
<>
<div>
    <h1>Dashboard</h1>
 <table>
    <tr>
    <th>user_id</th>
    <th>userName </th>
    <th>email</th>
    <th>role</th>
    <th>orders</th>
    </tr>
    {users.length >0 ? (
 <div> users</div>
    ):(
   <div>no users</div>
    )

    }
    
 </table>
</div>
</>
  )
}
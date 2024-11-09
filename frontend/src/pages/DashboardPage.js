import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../components/contexts/AuthContext";
const DashboardPage=()=>{
  
  const [users,setUsers]=useState([]);
  const url=process.env.REACT_APP_BACKEND_URL;
  const navigate=useNavigate();
  const {user}=useContext(AuthContext);
  const [token]=useState(localStorage.getItem('authToken'));
  console.log("user"+user);
  useEffect(() => {
    // Redirect if user is not an admin
  
    if (user && user.role !== "admin") {
        navigate("/");
    }
}, [user, navigate]);
useEffect(()=>{
  console.log("user NEW EFFECT:"+user);
},[user]);

/*if (!user) {
    // Optionally show a loading spinner or message if user data is still loading
    return <p>Loading...</p>;
}*/
  /*useEffect(() => {
   
    console.log(user);
    if (!token  || !user ) {
      navigate("/");
    }
  }, [user,token, navigate]);
  */
  const DeleteUser=async(userId)=>{
   const response=await axios.post(`${url}api/delete`,{
    id:userId
   },{
    headers:{
      Authorization:`Bearer ${token}`,
    }
   })
   setUsers((prevUsers)=>prevUsers.filter((user)=>user.id!==userId))
  }
  const changeRole=async(userId,newRole)=>{
    
    
   const response=await axios.post(`${url}api/role`,{
    id:userId,
    role:newRole
   },{
    headers:{
      Authorization:`Bearer ${token}`,
    }
   })

  }

   useEffect(()=>{

    const fetchUsers=async()=>{
        try{
             const response=await axios.post(`${url}api/users`,{},{
              headers:{
                Authorization:`Bearer ${token}`
              }
             }); 
             console.log("users fetched:"+response.data.users);
             setUsers(Array.isArray(response.data.users) ? response.data.users : []);
            // setUsers(response.data);
        }
        catch(error){
            console.error("users fetch failed:",error);
        }
        
    }
    fetchUsers();
   },[token])
   return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        {users.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">No users found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Username</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Role</th>
                  <th className="py-3 px-6 text-left">Orders</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {user.name}
                    </td>
                    <td className="py-3 px-6 text-left">{user.email}</td>
                    <td className="py-3 px-6 text-left capitalize">
                      {user.role}
                    </td>
                    <td className="py-3 px-6 text-left">
                      <Link
                        to={`orders/${user.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {user.name}'s orders
                      </Link>
                    </td>
                    <td className="py-3 px-6 text-left space-x-2">
                      {/* Delete Button */}
                      <button
                        onClick={() => DeleteUser(user.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                      {/* Role Change Dropdown */}
                      <select
                        onChange={(e) => changeRole(user.id, e.target.value)}
                        defaultValue={user.role}
                        className="bg-gray-200 text-gray-700 py-2 px-3 rounded"
                      >
                        <option value="customer">customer</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
  
}
export default DashboardPage;
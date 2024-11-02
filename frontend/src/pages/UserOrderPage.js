import { useEffect, useState } from "react"
import axios from "axios";
const UserOrderPage=(id)=>{
    const url=process.env.REACT_APP_BACKEND_URL;
    const [orders,setOrders]=useState([]);
    const token=localStorage.getItem('authToken');
    useEffect(()=>{
    const fetchOrders=async(user_id)=>{
       
       try{
        const response=await axios.post(`${url}api/showOrders`,{
            id:user_id
    },{
        headers:
            {
                Authorizarion:`Bearer ${token}`
            }
    }
          
        )
    }
       
       catch(error){
        console.error("order not found:",error.getMessage());
       } 
    }
    fetchOrders(id);
    },[])


    return(
        <>
      {orders.length ===0 ?(
        <div> no orders found for this user</div>
      
      ):(
        <table>
            <tr>
            <th>address_id</th>
            <th>total</th>
            <th>status</th>
            <th>created_at</th>
            </tr>
           { orders.map((order)=>(
                <tr
                key={order.id}
                >
                    <td>{order.address_id}</td>
                    <td>{order.total}</td>
                    <td>{order.status}</td>
                    <td>{order.created_at}</td>
                </tr>
               

            )

            )}
            
      
               
               </table>
      )

      }

      

        </>
    )
}
export default UserOrderPage;
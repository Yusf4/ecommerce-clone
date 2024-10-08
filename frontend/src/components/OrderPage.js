import { useContext } from "react";
import axios from "axios";
import { BagContext } from "./contexts/BagContext";
import { useNavigate } from "react-router-dom";
  import { useEffect } from "react";
const OrderPage=()=>{
   const navigate=useNavigate();
   const address_id=localStorage.getItem('address_id');
   const {bag,totalPrice}=useContext(BagContext);
   const url=process.env.REACT_APP_BACKEND_URL;
   const token=localStorage.getItem('authToken');
   useEffect(()=>{
const createOrder=async()=>{
    try{
      bag.map((item,index)=>{
         console.log("id:"+item.product.id);
         console.log("item quantity:"+item.quantity);
      })
      console.log({
        address_id,
        totalPrice,
        bag
      });
      
      console.log("address:"+address_id);
      console.log("bag id:"+bag[0]['product']['id']);
      console.log("totalPrice"+totalPrice);
      console.log("token"+token);
   const response =await axios.post(`http://127.0.0.1:8000/api/order`,
    { 

      address_id,
      totalPrice,
      bag
     },{
      headers:{
      Authorization:`Bearer ${token}`
     }
    });

   console.log("order created successfully"+response.data);
   localStorage.setItem('order_id',response.data.order_id);
   navigate('/payment');

  }
  catch(error){
   console.error("order creation failed:"+ error.message);
  }
 
} 
if (address_id && totalPrice && bag.length > 0) {
createOrder();
}
},[url,navigate,address_id,bag,totalPrice]);

}
export default OrderPage;
import { useState } from 'react';
import OrderSummary from './OrderSummary'; // Ensure OrderSummary is imported correctly
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
const Payment = () => {
  const[amount,setAmount]=useState(0);
  const [paymentMethodId,setPaymentMethodId]=useState('');
  
  const submit=async(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={submit}>
           <label></label>
      </form>
    </div>
  )
}
export default Payment;

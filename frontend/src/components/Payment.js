import { useContext, useState } from 'react';
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BagContext } from './contexts/BagContext';
const Payment = () => {
 
  const stripe=useStripe();
  const elements=useElements();

  const[error,setError]=useState(null);
  const[success,setSuccess]=useState(false);
  const[loading,setLoading]=useState(true);
  const {totalPrice}=useContext(BagContext);
  const orderId=localStorage.getItem('order_id');
  const [paymentMethodId,setPaymentMethodId]=useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    if(!stripe|| !elements){
      return ;
    }
    const cardElement=elements.getElement(CardElement);
    try{
      const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:'card',
        card:cardElement,
      });
      if(error){
        setError(error.message);
        setLoading(false);
        return ;
      }
      const response=await axios.post('http://127.0.0.1:8000/api/payment',{
        order_id:orderId,
        totalPrice,
        paymentMethodId:paymentMethod.id,
      });
      const {success,requires_action,paymentIntent}=response.data;
if(requires_action){
  const{ error:confirmError}=await stripe.confirmCardPayment(paymentIntent.client_secret);
  if(confirmError){
    setError(confirmError.message);
    setLoading(false);
    return ;
  }
}
if(success){
  setSuccess(true);
  setError(null);
  alert('payment successful');
}
else{
  setError('payment Failed');
}
    }
    catch(err){
      setError('payment Failed:'+err.message);
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <div>
    <h2>Complete Payment</h2>
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
    {error && <div style={{ color: 'red' }}>{error}</div>}
    {success && <div style={{ color: 'green' }}>Payment Successful!</div>}
  </div>
  )
}
export default Payment;

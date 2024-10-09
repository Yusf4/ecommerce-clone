import { useContext, useState } from 'react';
import React from 'react';
import { CardElement, useStripe, useElements,Elements} from '@stripe/react-stripe-js';
import axios from 'axios';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { BagContext } from './contexts/BagContext';
const Payment = () => {
 
  const stripe=useStripe();
  const token=localStorage.getItem('authToken');
  const elements=useElements();
  const[error,setError]=useState(null);
  const[success,setSuccess]=useState(false);
  const[loading,setLoading]=useState(false);
  const {totalPrice}=useContext(BagContext);
  const order_id=localStorage.getItem('order_id');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);
    if(!stripe|| !elements){
      setError("Stripe has not loaded yet. Please wait.");
      setLoading(false);
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
  console.log('order_id:'+order_id);
  console.log('price:'+totalPrice);
      console.log('id'+paymentMethod.id);
      const response=await axios.post('http://127.0.0.1:8000/api/payment',{
        order_id,
        amount:totalPrice,
       paymentMethodId:paymentMethod.id
      },{
        headers:{
          'Authorization':`Bearer ${token}`
        }
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
  console.log(response.data);
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
    <>
      {/* Include the Header */}
      <Header />

      {/* Payment Form Container */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Complete Payment</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-4">
          {/* Card Details Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Card Details</label>
            <div className="border p-4 rounded-md">
              <CardElement
                className="w-full"
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': { color: '#aab7c4' },
                    },
                    invalid: { color: '#fa755a' },
                  },
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            disabled={!stripe || loading}
          >
            {loading ? 'Processing...' : 'Pay'}
          </button>
        </form>

        {/* Error & Success Messages */}
        {error && <div className="mt-4 text-red-600">{error}</div>}
        {success && <div className="mt-4 text-green-600">Payment Successful!</div>}
      </div>
    </>
  );
};
export default Payment;

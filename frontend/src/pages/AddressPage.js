import { useContext, useState } from 'react';
import OrderSummary from '../components/OrderSummary';
import axios from 'axios';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../components/contexts/BagContext';
const AddressPage = () => {
  const[addressLine1,setAddressLine1]=useState('');
  const[addressLine2,setAddressLine2]=useState('');
  const[city,setCity]=useState('');
  const[state,setState]=useState('');
  const[country,setCountry]=useState('');
  
  const url=process.env.REACT_APP_BACKEND_URL;
  const navigate=useNavigate();
  const enroll=async(e)=>{
   e.preventDefault();
   try{

   const token=localStorage.getItem('authToken');
   console.log("token:"+token);
      const response= await axios.post(`http://127.0.0.1:8000/api/address`,{
        addressLine1,
        addressLine2,
        city,
        state,
        country,

      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      console.log(response.data.address_id);
      localStorage.setItem('address_id',response.data.address_id)
     console.log("address created:"+response.data);
     
     navigate('/order');
   }
   catch(error){
   console.error("failed address creation:"+error.message);
   }
}
  return (
    <div className="max-w-5xl mx-auto p-6">
     <Header/>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        
        <form onSubmit={enroll} className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

       
          <div>
            <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
             address_Line1:
            </label>
            <input
              type="text"
              name="addressLine1"
              value={addressLine1}
              id="addressLine1"
              onChange={(e)=>setAddressLine1(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
            address_Line2
            </label>
            <input
              type="text"
              onChange={(e)=>setAddressLine2(e.target.value)}
              value={addressLine2}
              name="addressLine2"
              id="addressLine2"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

      
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            city
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              onChange={(e)=>setCity(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

        
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
             state
            </label>
            <input
              type="text"
              name="state"
              id="state"
              value={state}
              onChange={(e)=>setState(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

         

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
            </label>
            <input
              type="text"
              name="country"
              id="country"
              onChange={(e)=>setCountry(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4">
            Submit Payment
          </button>
        </form>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default AddressPage;

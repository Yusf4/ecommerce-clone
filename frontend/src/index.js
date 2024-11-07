import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import reportWebVitals from './reportWebVitals';
import { BagProvider } from './components/contexts/BagContext';
import { SearchProvider } from './components/contexts/SearchContext';
import { AuthProvider } from './components/contexts/AuthContext';
const key=process.env.REACT_APP_STRIPE_SECRET;
const stripePromise = loadStripe(key);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
  <SearchProvider>
  <BagProvider>

    <React.StrictMode>
    <Elements stripe={stripePromise}>
    <App />
    </Elements>
  </React.StrictMode>

 
  </BagProvider>
  </SearchProvider>
   </AuthProvider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { useState } from 'react';
import Register from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import  CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import BagPage from './pages/BagPage';
import Payment from './components/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddressPage from './pages/AddressPage';
import OrderPage from './components/OrderPage';
import AboutUsPage from './pages/AboutUsPage';
import PrivateRoute from './pages/PrivateRoute';
import TermsPage from './pages/TermsPage';
import StrapiTesting from './pages/StrapiTesting';
import DashboardPage from './pages/DashboardPage';
import UserOrderPage from './pages/UserOrderPage';
import PrivacyPage from './pages/PrivacyPage';
function App() {
  
  const [flashMessage,setFlashMessage]=useState('');
       /* <Route element={<PrivateRoute/>}/>*/
  return (
   <Router>
    <Routes>
      <Route path="/strapi" element={<StrapiTesting/>}/>
      <Route path="/" element={<HomePage />}/>
      <Route path="product/:id" element={<ProductPage />}/>
      <Route path="/categories" element={<CategoriesPage/>}/>
      <Route path="/categories/:name/:id" element={<CategoryPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/logout" element={<LogoutPage/>}/>
      <Route path="/Bag" element={<BagPage/>}/>
      <Route path="/address" element={<AddressPage/>}/>
      <Route path="/order" element={<OrderPage/>}/>   
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/>
      <Route path="/dashboard/orders/:id" element={<UserOrderPage/>}/>
      <Route path="/about" element={<AboutUsPage/>}/>
      <Route path="/terms" element={<TermsPage/>}/>
      <Route path="/privacy" element={<PrivacyPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;

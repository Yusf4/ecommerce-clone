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
import AddressPage from './pages/AddressPage';
import OrderPage from './components/OrderPage';
function App() {
  const [flashMessage,setFlashMessage]=useState('');
  return (
   <Router>
    <Routes>
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

      
    </Routes>
   </Router>
  );
}

export default App;

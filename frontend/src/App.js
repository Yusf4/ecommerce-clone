import React from 'react';
import Register from './pages/RegisterPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import  CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="product/:id" element={<ProductPage />}/>
      <Route path="/categories" element={<CategoriesPage/>}/>
      <Route path="/categories/:name/:id" element={<CategoryPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<LoginPage/>}/>

      
    </Routes>
   </Router>
  );
}

export default App;

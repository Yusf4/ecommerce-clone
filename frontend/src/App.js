import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductPage from './pages/ProductPage';
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="product/:id" element={<ProductPage />}/>
      <Route path="/categories" element={<CategoriesPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;

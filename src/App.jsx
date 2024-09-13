import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import FoodDetailPage from './components/FoodDetailPage';
import { CartProvider } from './context/CartContext';
import { FoodProvider } from './context/FoodContext';
import Layout from './Layout'; // Import the Layout component
import './index.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <FoodProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route 
              path="/home" 
              element={
                <Layout>
                  <HomePage />
                </Layout>
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Layout>
                  <CartPage />
                </Layout>
              } 
            />
            <Route 
              path="/about" 
              element={
                <Layout>
                  <AboutPage />
                </Layout>
              } 
            />
            <Route 
              path="/food/:id" 
              element={
                <Layout>
                  <FoodDetailPage />
                </Layout>
              } 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </FoodProvider>
      </CartProvider>
    </Router>
  );
}

export default App;

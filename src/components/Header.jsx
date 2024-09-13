import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './css/Header.css'

const Header = () => {
  const { cart } = useCart();
  
  return (
    <header className="header">
      <h1>Food Find App</h1>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/cart">
          Cart {cart.length > 0 && <span className="cart-count">({cart.length})</span>}
        </Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import './css/Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Food App. All rights reserved.</p>
      
      {/* Navigation links similar to the header */}
      <nav className="footer-nav">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

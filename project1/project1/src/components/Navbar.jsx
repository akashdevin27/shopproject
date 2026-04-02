import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="top-navbar">
      <div className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <h2>SweetGifts</h2>
      </div>
      <div className="nav-menu">
        <Link to="/cake" className="nav-item">Cakes</Link>
        <Link to="/candy" className="nav-item">Candy</Link>
        <Link to="/gift" className="nav-item">Gifts</Link>
        <Link to="/flowers" className="nav-item">Flowers</Link>
      </div>
      <div className="nav-icons">
        <span className="icon" title="Search">🔍</span>
        <div className="cart-icon-wrapper" onClick={() => navigate('/cart')} title="Cart">
          <span className="icon">🛒</span>
          {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

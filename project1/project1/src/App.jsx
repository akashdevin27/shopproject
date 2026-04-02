import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Candy from './pages/Candy';
import Cake from './pages/Cake';
import Gift from './pages/Gift';
import Flowers from './pages/Flowers';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

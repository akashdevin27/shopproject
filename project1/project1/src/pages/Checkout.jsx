import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import './ShopPages.css';

const Checkout = () => {
  const { getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isPlaced, setIsPlaced] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isPlaced) {
    return (
      <div className="page-container success-page">
        <Navbar />
        <div className="success-content">
          <h1>🎉 Order Placed Successfully!</h1>
          <p>Thank you for shopping with SweetGifts. You are being redirected to the home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Navbar />
      <div className="checkout-content">
        <h1>Checkout</h1>
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" required placeholder="123 Sweet Lane" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" required placeholder="(123) 456-7890" />
            </div>

            <h2>Payment Method</h2>
            <div className="payment-options">
              <label className={`radio-label ${paymentMethod === 'upi' ? 'active' : ''}`}>
                <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                UPI
              </label>
              <label className={`radio-label ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                Credit/Debit Card
              </label>
              <label className={`radio-label ${paymentMethod === 'cod' ? 'active' : ''}`}>
                <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                Cash on Delivery
              </label>
            </div>

            <button type="submit" className="btn-place-order">Place Order - ${getCartTotal().toFixed(2)}</button>
          </form>

          <div className="checkout-summary">
            <h2>Order Total</h2>
            <div className="summary-total huge">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;

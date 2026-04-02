import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';
import './ShopPages.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <div style={{paddingTop: '100px', textAlign: 'center'}}><h2>Product not found!</h2></div>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="product-details-content">
        <div className="details-left">
          <img src={product.image} alt={product.name} className="details-image" />
        </div>
        <div className="details-right">
          <h1 className="details-name">{product.name}</h1>
          <p className="details-price">${product.price.toFixed(2)}</p>
          <p className="details-description">{product.description}</p>
          
          <div className="quantity-selector">
            <label>Quantity</label>
            <div className="qty-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
          
          <button className="btn-add-large" onClick={handleAddToCart}>
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;

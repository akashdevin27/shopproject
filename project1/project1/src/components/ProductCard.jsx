import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <div className="product-image-container" onClick={() => navigate(`/product/${product.id}`)}>
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name" onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="btn-add-cart" 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Category.css';

const Gift = () => {
  const gifts = productsData.filter(item => item.category === "Gifts");
  
  return (
    <div className="category-page">
      <Navbar />
      <div className="category-content">
        <h1>Perfect Gifts</h1>
        <div className="product-grid">
          {gifts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};
export default Gift;

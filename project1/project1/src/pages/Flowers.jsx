import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Category.css';

const Flowers = () => {
  const flowers = productsData.filter(item => item.category === "Flowers");
  
  return (
    <div className="category-page">
      <Navbar />
      <div className="category-content">
        <h1>Beautiful Flowers</h1>
        <div className="product-grid">
          {flowers.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};
export default Flowers;

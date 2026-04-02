import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Category.css';

const Candy = () => {
  const candies = productsData.filter(item => item.category === "Candy");
  
  return (
    <div className="category-page">
      <Navbar />
      <div className="category-content">
        <h1>Sweet Candies</h1>
        <div className="product-grid">
          {candies.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};
export default Candy;

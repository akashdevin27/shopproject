import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import './Category.css';

const Cake = () => {
  const cakes = productsData.filter(item => item.category === "Cakes");
  
  return (
    <div className="category-page">
      <Navbar />
      <div className="category-content">
        <h1>Delicious Cakes</h1>
        <div className="product-grid">
          {cakes.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};
export default Cake;

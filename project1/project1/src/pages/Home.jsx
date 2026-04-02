import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* Main Content: Split Layout */}
      <main className="hero-section">
        {/* Left Side: Text & Search Box */}
        <div className="hero-left">
          <div className="hero-text-content">
            <h1>Delicious Cakes & Perfect Gifts for Your Loved Ones</h1>
            <p>Make every moment special with our hand-crafted cakes, fresh candies, and uniquely curated gift baskets for any occasion.</p>
          </div>
        </div>
    

        {/* Right Side: Large Image */}
        <div className="hero-right">
          <img 
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1089&q=80" 
            alt="Beautiful Cake and Gifts" 
            className="hero-image"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;

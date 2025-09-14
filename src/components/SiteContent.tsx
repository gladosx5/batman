import React from 'react';

const SiteContent: React.FC = () => {
  return (
    <div className="site-content">
      <header className="header">
        <h1>Welcome</h1>
      </header>
      
      <section className="hero">
        <h2>Hero Section</h2>
        <p>This is the main hero content.</p>
      </section>
      
      <section className="offers">
        <h2>Our Offers</h2>
        <p>Special offers and promotions.</p>
      </section>
      
      <section className="menu">
        <h2>Menu</h2>
        <p>Browse our menu items.</p>
      </section>
      
      <section className="about">
        <h2>About Us</h2>
        <p>Learn more about our story.</p>
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
        <p>Get in touch with us.</p>
      </section>
      
      <footer className="footer">
        <p>&copy; 2025 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SiteContent;
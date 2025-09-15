import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/gotham-street.css';

function App() {
  return (
    <div className="gotham-street-app">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
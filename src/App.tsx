import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BatmanScene from './components/BatmanScene';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './styles/main.css';
import './styles/batman.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const foodSiteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation pour faire monter la ville et révéler le site de nourriture
      gsap.timeline({
        scrollTrigger: {
          trigger: ".batman-scene",
          start: "bottom center",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            // Faire monter la ville
            gsap.set(".gotham-skyline", {
              y: -progress * 100 + "%"
            });
            // Révéler le site de nourriture
            gsap.set(".food-site", {
              y: (1 - progress) * 100 + "%",
              opacity: progress
            });
          }
        }
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div ref={appRef} className="app">
          <BatmanScene />
          <div ref={foodSiteRef} className="food-site">
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Menu />
                  <About />
                  <Contact />
                </>
              } />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
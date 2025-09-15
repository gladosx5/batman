import React, { useState, useEffect } from 'react';
import GothamScene from './components/GothamScene';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/gotham-street.css';

function App() {
  const [currentSection, setCurrentSection] = useState('accueil');
  const [isGothamVisible, setIsGothamVisible] = useState(true);

  // Gérer la visibilité de la scène Gotham
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.1; // 10% de la hauteur de l'écran
      
      if (scrollY > threshold) {
        setIsGothamVisible(false);
      } else {
        setIsGothamVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Scène Gotham par-dessus */}
      {isGothamVisible && <GothamScene />}
      
      {/* Site Gotham Street */}
      <div className="gotham-street-site">
        <Header currentSection={currentSection} onNavigate={scrollToSection} />
        
        <main>
          <section id="accueil">
            <Hero onNavigate={scrollToSection} />
          </section>
          
          <section id="menu">
            <Menu />
          </section>
          
          <section id="a-propos">
            <About />
          </section>
          
          <section id="infos-pratiques">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
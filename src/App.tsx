import React from 'react';
import GothamScene from './components/GothamScene';
import ScrollIndicator from './components/ScrollIndicator';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './styles/animations.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="app">
      {/* Main Gotham Scene */}
      <GothamScene />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Content Sections for Scrolling */}
      <section className="content-section">
        <div>
          <h2>The Dark Knight Rises</h2>
          <p>
            Experience the emergence of Batman from the shadows of Gotham City. 
            Watch as the iconic symbol rises from the urban landscape with cinematic flair.
          </p>
        </div>
      </section>
      
      <section className="content-section">
        <div>
          <h2>Gotham's Guardian</h2>
          <p>
            A symbol of hope in the darkness, Batman watches over Gotham City 
            from the highest towers, ready to answer the call when justice is needed.
          </p>
        </div>
      </section>
      
      <section className="content-section">
        <div>
          <h2>Legend of the Bat</h2>
          <p>
            More than a hero, Batman is a legend that strikes fear into the hearts 
            of criminals while inspiring hope in the citizens of Gotham.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
import React from 'react';
import BatmanLogo from './BatmanLogo';
import CityAnimation from './CityAnimation';

const GothamScene = () => {
  return (
    <div className="gotham-scene" tabIndex={0}>
      {/* Sky with stars */}
      <div className="sky">
        <div className="moon"></div>
      </div>

      {/* Gotham City Skyline */}
      <div className="skyline"></div>

      {/* City Animation Controller */}
      <CityAnimation />

      {/* Batman Logo */}
      <BatmanLogo />

      {/* Underground Page - positioned below the city */}
      <div className="underground-page">
        <div className="underground-content">
          <h1>Bienvenue dans les Souterrains de Gotham</h1>
          <p>Vous êtes maintenant sous la ville...</p>
          <div className="underground-sections">
            <section className="underground-section">
              <h2>Les Tunnels Secrets</h2>
              <p>Découvrez les passages cachés sous Gotham City.</p>
            </section>
            <section className="underground-section">
              <h2>La Batcave</h2>
              <p>Le repaire secret de Batman se trouve quelque part ici...</p>
            </section>
            <section className="underground-section">
              <h2>Les Égouts</h2>
              <p>Un réseau complexe s'étend sous toute la ville.</p>
            </section>
          </div>
        </div>
      </div>

      {/* Instructions overlay */}
      <div className="instructions">
        <p>Scrollez pour voir Batman sortir de Gotham, puis continuez pour aller sous la ville</p>
      </div>
    </div>
  );
};

export default GothamScene;
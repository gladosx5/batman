import React from 'react';

const WebsiteContent: React.FC = () => {
  return (
    <div className="website-content">
      <div className="content-container">
        <h1>Bienvenue</h1>
        
        <section className="intro-section">
          <p>
            Découvrez l'univers sombre et mystérieux de Gotham City, où les ombres 
            cachent des secrets et où la justice prend une forme inattendue.
          </p>
          <p>
            Dans cette métropole corrompue, un héros masqué veille sur les innocents 
            et combat le crime avec une détermination sans faille.
          </p>
        </section>

        <section className="story-section">
          <h2>L'Histoire</h2>
          <p>
            Gotham City n'a pas toujours été plongée dans les ténèbres. Autrefois 
            prospère, elle a sombré dans la corruption et le crime organisé.
          </p>
          <p>
            C'est alors qu'une figure légendaire a émergé des ombres, utilisant 
            la peur comme arme contre ceux qui terrorisent les innocents.
          </p>
          <p>
            Chaque nuit, il patrouille dans les rues, veillant sur une ville 
            qui a besoin d'un gardien, même si elle ne le mérite pas toujours.
          </p>
        </section>

        <section className="mission-section">
          <h2>La Mission</h2>
          <p>
            Protéger les innocents, combattre l'injustice et apporter l'espoir 
            là où règnent les ténèbres. Telle est la mission de celui qui a 
            choisi de devenir plus qu'un homme.
          </p>
          <p>
            Car parfois, les héros ne portent pas de cape par choix, mais par 
            nécessité. Parfois, ils deviennent le symbole dont leur ville a besoin.
          </p>
        </section>

        <section className="legacy-section">
          <h2>L'Héritage</h2>
          <p>
            Au-delà de l'homme se cache un symbole. Un symbole d'espoir pour 
            les opprimés et de terreur pour les criminels.
          </p>
          <p>
            Ce symbole transcende l'individu pour devenir une légende, 
            une promesse que la justice finira toujours par triompher.
          </p>
          <p>
            Dans l'obscurité de Gotham, une chauve-souris veille. 
            Et tant qu'elle volera dans la nuit, l'espoir demeurera.
          </p>
        </section>

        <section className="final-section">
          <h2>La Nuit Continue</h2>
          <p>
            L'histoire ne s'arrête jamais à Gotham. Chaque coucher de soleil 
            marque le début d'une nouvelle bataille contre les forces du mal.
          </p>
          <p>
            Et quelque part, dans les hauteurs de la ville, une silhouette 
            se prépare à répondre à l'appel du devoir.
          </p>
          <p>
            Car Gotham aura toujours besoin de son protecteur. 
            Elle aura toujours besoin de Batman.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WebsiteContent;
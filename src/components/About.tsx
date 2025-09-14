import React from 'react';
import { Award, Clock, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>Notre Histoire</h2>
              <p>Une passion pour la cuisine authentique depuis 1995</p>
            </div>
            
            <div className="about-description">
              <p>
                Depuis plus de 25 ans, DeliciousFood s'engage à vous offrir une expérience 
                culinaire exceptionnelle. Notre équipe de chefs passionnés sélectionne 
                rigoureusement les meilleurs ingrédients locaux pour créer des plats 
                qui racontent une histoire.
              </p>
              
              <p>
                Chaque recette est le fruit d'une tradition familiale transmise de 
                génération en génération, revisitée avec une touche moderne pour 
                satisfaire les palais les plus exigeants.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <Award className="stat-icon" />
                <div>
                  <h4>25+</h4>
                  <span>Années d'expérience</span>
                </div>
              </div>
              
              <div className="stat">
                <Users className="stat-icon" />
                <div>
                  <h4>50k+</h4>
                  <span>Clients satisfaits</span>
                </div>
              </div>
              
              <div className="stat">
                <Heart className="stat-icon" />
                <div>
                  <h4>100%</h4>
                  <span>Ingrédients frais</span>
                </div>
              </div>
              
              <div className="stat">
                <Clock className="stat-icon" />
                <div>
                  <h4>30min</h4>
                  <span>Livraison rapide</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
              alt="Notre équipe de chefs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
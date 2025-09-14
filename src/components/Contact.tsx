import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    alert('Message envoyé ! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactez-nous</h2>
          <p>Nous sommes là pour vous servir</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h4>Adresse</h4>
                <p>123 Rue de la Gastronomie<br />75001 Paris, France</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4>Téléphone</h4>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>contact@deliciousfood.fr</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock className="contact-icon" />
              <div>
                <h4>Horaires</h4>
                <p>Lun-Dim: 11h00 - 23h00</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Votre message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
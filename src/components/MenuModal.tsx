import React, { useEffect, useRef } from 'react';

interface MenuModalProps {
  selectedDish: any;
  onClose: () => void;
  getAllergenIcon: (allergen: string) => string;
}

const MenuModal: React.FC<MenuModalProps> = ({ selectedDish, onClose, getAllergenIcon }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus management pour l'accessibilité
  useEffect(() => {
    if (selectedDish && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedDish]);

  // Gestion du clic en dehors de la modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Gestion du clic sur le bouton fermer
  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  if (!selectedDish) return null;

  return (
    <div 
      className="menu-modal-overlay" 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="menu-modal" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <button 
          className="menu-modal-close" 
          onClick={handleCloseClick}
          aria-label="Fermer la modal"
          type="button"
        >
          <span aria-hidden="true">✕</span>
        </button>
        
        <div className="menu-modal-content">
          <div className="menu-modal-image-container">
            <img 
              src={selectedDish.image} 
              alt={selectedDish.name} 
              className="menu-modal-image"
            />
            <div className="menu-modal-price-badge">{selectedDish.price}</div>
          </div>
          
          <div className="menu-modal-info">
            <h2 id="modal-title" className="menu-modal-title">
              {selectedDish.name}
            </h2>
            
            <p className="menu-modal-desc">{selectedDish.desc}</p>
            
            {selectedDish.badges && selectedDish.badges.length > 0 && (
              <div className="menu-modal-badges">
                {selectedDish.badges.map((badge, index) => (
                  <span key={index} className="menu-modal-badge">
                    {badge}
                  </span>
                ))}
              </div>
            )}
            
            <div className="menu-modal-details">
              <h4>Composition :</h4>
              <p>{selectedDish.ingredients}</p>
            </div>
            
            {selectedDish.allergens && selectedDish.allergens.length > 0 && (
              <div className="menu-modal-allergens">
                <h4>Allergènes :</h4>
                <div className="menu-modal-allergen-list">
                  {selectedDish.allergens.map((allergen, index) => (
                    <span key={index} className="menu-modal-allergen-badge">
                      {getAllergenIcon(allergen)} {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="menu-modal-actions">
              <a 
                href="tel:+33123456789" 
                className="menu-modal-cta primary"
                onClick={(e) => e.stopPropagation()}
              >
                📞 Réserver par téléphone
              </a>
              <a 
                href="https://www.google.com/maps/dir//Gotham+Streat,+Rue+de+la+République,+Gaillac/@43.9028043,1.8975780,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="menu-modal-cta secondary"
                onClick={(e) => e.stopPropagation()}
              >
                📍 Itinéraire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
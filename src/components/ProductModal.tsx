import React, { useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  desc: string;
  badges: string[];
  image: string;
  ingredients: string[];
  allergens: string[];
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Empêcher le scroll

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'spicy': return '🌶️';
      case 'vegetarian': return '🥗';
      case 'enfant': return '🎁';
      case 'poulet': return '🐔';
      case 'steak': return '🥩';
      case 'kebab': return '🥙';
      case 'tandoori': return '🌶️';
      default: return '🍽️';
    }
  };

  const getAllergenIcon = (allergen: string) => {
    switch (allergen) {
      case 'Gluten': return '🌾';
      case 'Lactose': return '🥛';
      case 'Nuts': return '🥜';
      default: return '⚠️';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Bouton fermer */}
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>

        <div className="modal-grid">
          {/* Image */}
          <div className="modal-image-container">
            <img 
              src={product.image} 
              alt={product.name}
              className="modal-image"
            />
          </div>

          {/* Contenu */}
          <div className="modal-info">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-category">{product.category}</p>
            <p className="modal-desc">{product.desc}</p>

            {/* Ingrédients */}
            <div className="modal-section">
              <h3>Ingrédients</h3>
              <ul className="ingredients-list">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Allergènes */}
            {product.allergens.length > 0 && (
              <div className="modal-section">
                <h3>Allergènes</h3>
                <div className="allergens-list">
                  {product.allergens.map(allergen => (
                    <span key={allergen} className="allergen-badge">
                      {getAllergenIcon(allergen)} {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {product.badges.length > 0 && (
              <div className="modal-section">
                <div className="modal-badges">
                  {product.badges.map(badge => (
                    <span key={badge} className="modal-badge">
                      {getBadgeIcon(badge)} {badge}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Prix et actions */}
            <div className="modal-footer">
              <div className="modal-price">{product.price}</div>
              <div className="modal-actions">
                <a href="tel:+33123456789" className="btn-call-modal">
                  📞 Réserver / Appeler
                </a>
                <a 
                  href="https://maps.google.com/?q=Gotham+Streat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-directions-modal"
                >
                  Itinéraire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
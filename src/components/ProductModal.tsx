import React, { useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  desc: string;
  badges: string[];
  image: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'vegetarian': return '🌱';
      case 'spicy': return '🌶️';
      case 'enfant': return '👶';
      case 'poulet': return '🐔';
      case 'steak': return '🥩';
      case 'kebab': return '🥙';
      case 'tandoori': return '🔥';
      default: return '🍽️';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-grid">
          <div className="modal-image-container">
            <img 
              src={product.image} 
              alt={product.name}
              className="modal-image"
            />
          </div>
          
          <div className="modal-info">
            <h2 className="modal-title">{product.name}</h2>
            
            <div className="modal-category">{product.category}</div>
            
            <p className="modal-description">{product.desc}</p>
            
            {product.badges.length > 0 && (
              <div className="modal-badges">
                <h4>Caractéristiques :</h4>
                <div className="badges-list">
                  {product.badges.map((badge, index) => (
                    <span key={index} className="modal-badge">
                      {getBadgeIcon(badge)} {badge}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="modal-price">{product.price}</div>
            
            <div className="modal-actions">
              <a href="tel:+33123456789" className="btn-call-modal">
                📞 Réserver / Appeler
              </a>
              <a 
                href="https://www.google.com/maps/dir//Gotham+Streat" 
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
  );
};

export default ProductModal;
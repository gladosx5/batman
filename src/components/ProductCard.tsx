import React from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  desc: string;
  badges: string[];
  image: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
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

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        <div className="product-overlay">
          <h3 className="product-name">{product.name}</h3>
        </div>
      </div>
      
      <div className="product-info">
        <p className="product-desc">{product.desc}</p>
        
        {/* Tags */}
        {product.badges.length > 0 && (
          <div className="product-badges">
            {product.badges.map(badge => (
              <span key={badge} className="product-badge">
                {getBadgeIcon(badge)} {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Prix */}
      <div className="product-price">{product.price}</div>
    </div>
  );
};

export default ProductCard;
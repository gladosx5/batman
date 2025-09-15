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
        
        {product.badges.length > 0 && (
          <div className="product-badges">
            {product.badges.map((badge, index) => (
              <span key={index} className="product-badge" title={badge}>
                {getBadgeIcon(badge)}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="product-price">
        {product.price}
      </div>
    </div>
  );
};

export default ProductCard;
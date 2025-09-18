import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';
import { Button } from '../common/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img
            src={product.images[0]}
            alt={product.title}
            className={`w-full h-64 object-cover object-center transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {product.images[1] && isHovered && (
            <img
              src={product.images[1]}
              alt={product.title}
              className="absolute inset-0 w-full h-64 object-cover object-center transition-opacity duration-300"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              {product.price.toFixed(2)} €
            </span>
            {product.stock > 0 ? (
              <Button
                size="sm"
                onClick={handleAddToCart}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Ajouter
              </Button>
            ) : (
              <span className="text-sm text-red-600 font-medium">
                Rupture de stock
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="absolute top-2 left-2">
            {product.tags.includes('new') && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Nouveau
              </span>
            )}
            {product.tags.includes('sale') && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-1">
                Promo
              </span>
            )}
          </div>
        )}

        {/* Wishlist */}
        <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </a>
    </div>
  );
};
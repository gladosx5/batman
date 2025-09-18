import React from 'react';
import { useCart } from '../../hooks/useCart';
import { Button } from '../common/Button';
import { EmptyState } from '../common/EmptyState';
import { EMPTY_STATES } from '../../utils/constants';

export const CartDrawer: React.FC = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, getTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">
              Panier ({items.length})
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <EmptyState
                title={EMPTY_STATES.FR.CART_EMPTY.title}
                ctaText={EMPTY_STATES.FR.CART_EMPTY.cta}
                onCtaClick={() => {
                  setIsOpen(false);
                  window.location.href = '/catalog';
                }}
              />
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.variant?.id}`} className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.product.title}</h3>
                      {item.variant && (
                        <p className="text-xs text-gray-600">
                          {item.variant.type}: {item.variant.value}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant?.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm"
                          >
                            -
                          </button>
                          <span className="text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant?.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant?.id)}
                          className="text-red-500 text-sm hover:text-red-700"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {((item.product.price + (item.variant?.priceModifier || 0)) * item.quantity).toFixed(2)} €
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>{getTotal().toFixed(2)} €</span>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/checkout';
                }}
              >
                Commander
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
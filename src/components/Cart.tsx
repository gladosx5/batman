import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="cart-empty">
            <h2>Votre panier est vide</h2>
            <p>Découvrez nos délicieux plats et ajoutez-les à votre panier</p>
            <Link to="/" className="btn btn-primary">
              <ArrowLeft />
              Retour au menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/" className="back-link">
            <ArrowLeft />
            Continuer les achats
          </Link>
          <h1>Votre Panier</h1>
          <button onClick={clearCart} className="clear-cart-btn">
            <Trash2 />
            Vider le panier
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {state.items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="cart-item-price">{item.price.toFixed(2)}€</span>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      <Minus />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      <Plus />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    <Trash2 />
                  </button>
                </div>

                <div className="cart-item-total">
                  {(item.price * item.quantity).toFixed(2)}€
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Résumé de la commande</h3>
            
            <div className="summary-line">
              <span>Sous-total</span>
              <span>{state.total.toFixed(2)}€</span>
            </div>
            
            <div className="summary-line">
              <span>Livraison</span>
              <span>Gratuite</span>
            </div>
            
            <div className="summary-line total">
              <span>Total</span>
              <span>{state.total.toFixed(2)}€</span>
            </div>

            <button className="btn btn-primary btn-full">
              Passer la commande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
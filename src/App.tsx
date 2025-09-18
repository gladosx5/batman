import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import './index.css';

function App() {
  // Simple routing based on pathname
  const path = window.location.pathname;
  
  const renderPage = () => {
    switch (path) {
      case '/login':
        return <LoginPage />;
      case '/register':
        return <div>Register Page (à implémenter)</div>;
      case '/catalog':
        return <div>Catalog Page (à implémenter)</div>;
      case '/cart':
        return <div>Cart Page (à implémenter)</div>;
      case '/account':
        return <div>Account Page (à implémenter)</div>;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default App;
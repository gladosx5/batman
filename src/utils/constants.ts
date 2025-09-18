export const COLORS = {
  brand: '#000000',
  surface: '#FFFFFF',
  text: '#111111',
  accent: '#FF5C00',
  success: '#10B981',
  error: '#EF4444',
  disabled: '#9CA3AF',
  border: '#E5E7EB',
  background: '#F9FAFB'
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const HEADER_HEIGHT = 72;

export const ANIMATIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms'
};

export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog',
  CATEGORY: '/category',
  PRODUCT: '/product',
  CART: '/cart',
  CHECKOUT: '/checkout',
  LOGIN: '/login',
  REGISTER: '/register',
  ACCOUNT: '/account',
  ORDERS: '/account/orders',
  WISHLIST: '/account/wishlist',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TERMS: '/terms'
};

export const EMPTY_STATES = {
  FR: {
    CART_EMPTY: {
      title: 'Votre panier est vide.',
      cta: 'Découvrir les nouveautés'
    },
    NO_ORDERS: {
      title: 'Vous n\'avez pas encore passé de commande.',
      cta: 'Découvrir les nouveautés'
    },
    WISHLIST_EMPTY: {
      title: 'Aucun favori pour le moment.',
      cta: 'Voir les best-sellers'
    },
    CATALOG_EMPTY: {
      title: 'Aucun produit pour l\'instant — soyez le premier à le découvrir.',
      cta: 'M\'avertir'
    }
  },
  EN: {
    CART_EMPTY: {
      title: 'Your cart is empty.',
      cta: 'Discover new arrivals'
    },
    NO_ORDERS: {
      title: 'You haven\'t placed an order yet.',
      cta: 'Discover new arrivals'
    },
    WISHLIST_EMPTY: {
      title: 'No favorites yet.',
      cta: 'See best-sellers'
    },
    CATALOG_EMPTY: {
      title: 'No products yet — be the first to know.',
      cta: 'Notify me'
    }
  }
};
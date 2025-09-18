export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: Category;
  stock: number;
  variants: ProductVariant[];
  tags: string[];
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  type: 'size' | 'color';
  value: string;
  stock: number;
  priceModifier?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
  parent?: Category;
  order: number;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  addresses: Address[];
  newsletterOptIn: boolean;
  createdAt: string;
}

export interface Address {
  id: string;
  type: 'billing' | 'shipping';
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  orderNumber: string;
  user: User;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shippingFee: number;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  trackingNumber?: string;
  carrier?: string;
  createdAt: string;
  updatedAt: string;
  addresses: {
    billing: Address;
    shipping: Address;
  };
}

export interface OrderItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  price: number;
}

export interface CartItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
}

export interface CarouselItem {
  id: string;
  title: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  order: number;
}

export interface NotificationRequest {
  id: string;
  email: string;
  product: Product;
  createdAt: string;
}
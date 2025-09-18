import React from 'react';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/common/Button';
import { Product } from '../types';

// Mock data
const mockProducts: Product[] = [
  {
    id: '1',
    title: 'T-shirt Premium Coton',
    description: 'T-shirt en coton bio, coupe moderne et confortable',
    price: 29.99,
    images: ['https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg', 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'],
    category: { id: '1', name: 'Hommes', icon: '👔', slug: 'hommes', order: 1 },
    stock: 15,
    variants: [
      { id: '1', type: 'size', value: 'M', stock: 5 },
      { id: '2', type: 'size', value: 'L', stock: 10 }
    ],
    tags: ['new'],
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Robe Élégante',
    description: 'Robe parfaite pour toutes occasions',
    price: 79.99,
    images: ['https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'],
    category: { id: '2', name: 'Femmes', icon: '👗', slug: 'femmes', order: 2 },
    stock: 8,
    variants: [],
    tags: ['sale'],
    status: 'published',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

const carouselItems = [
  {
    id: '1',
    title: 'Collection Automne 2024',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    ctaText: 'Découvrir',
    ctaLink: '/catalog',
    order: 1
  },
  {
    id: '2',
    title: 'Nouveautés Exclusives',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    ctaText: 'Voir tout',
    ctaLink: '/catalog?filter=new',
    order: 2
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <img
          src={carouselItems[0].image}
          alt={carouselItems[0].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {carouselItems[0].title}
            </h1>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.location.href = carouselItems[0].ctaLink}
            >
              {carouselItems[0].ctaText}
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Hommes', slug: 'hommes', icon: '👔' },
              { name: 'Femmes', slug: 'femmes', icon: '👗' },
              { name: 'Accessoires', slug: 'accessoires', icon: '👜' },
              { name: 'Nouveautés', slug: 'nouveautes', icon: '✨' },
              { name: 'Promo', slug: 'promo', icon: '🏷️' }
            ].map((category) => (
              <a
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <span className="font-medium text-gray-900">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Nouveautés */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Nouveautés</h2>
            <Button variant="outline" onClick={() => window.location.href = '/catalog?filter=new'}>
              Voir tout
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best-sellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Best-sellers</h2>
            <Button variant="outline" onClick={() => window.location.href = '/catalog?filter=bestsellers'}>
              Voir tout
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Block */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depuis plus de 10 ans, nous créons des vêtements qui allient style, 
                confort et durabilité. Notre passion pour la mode éthique nous guide 
                dans chacune de nos créations.
              </p>
              <Button variant="outline" onClick={() => window.location.href = '/about'}>
                En savoir plus
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                alt="Notre atelier"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-gray-300 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières nouveautés 
            et offres exclusives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button variant="primary">
              S'inscrire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
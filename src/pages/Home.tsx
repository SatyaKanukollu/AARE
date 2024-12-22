import React from 'react';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Restaurant Equipment
          </h1>
          <p className="text-xl mb-8">
            Quality equipment for your commercial kitchen needs
          </p>
          <a 
            href="/products" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </header>

      <FeaturedProducts />
      <AboutSection />
      <ContactSection />
    </div>
  );
};
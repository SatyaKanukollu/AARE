import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

export const FeaturedProducts: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCategories } from '../components/ProductCategories';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { products } from '../data/products';
import { getCategoryTitle } from '../utils/categories';
import { FiFilter } from 'react-icons/fi';

export const Products: React.FC = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = Array.from(
    new Set(products.map(product => product.category))
  );

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {selectedCategory ? getCategoryTitle(selectedCategory) : 'All Products'}
          </h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center text-gray-600"
          >
            <FiFilter className="mr-2" />
            Filters
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <aside className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>
          
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
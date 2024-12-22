import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategoryTitle } from '../utils/categories';

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<Props> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    if (category) {
      navigate(`/products/${category}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => handleCategoryClick('')}
          className={`w-full text-left px-4 py-2 rounded ${
            selectedCategory === '' 
              ? 'bg-blue-50 text-blue-600 font-medium' 
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`w-full text-left px-4 py-2 rounded ${
              selectedCategory === category 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {getCategoryTitle(category)}
          </button>
        ))}
      </div>
    </div>
  );
};
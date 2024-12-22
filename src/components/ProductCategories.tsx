import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categoryList } from '../utils/categories';

export const ProductCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryList.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleCategoryClick(category.slug)}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <span className="text-center font-medium text-gray-800">
                {category.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
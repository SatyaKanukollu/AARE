import React from 'react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative pb-[100%]">
        <img 
          src={product.image_url} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-4"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 mb-2 truncate">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 overflow-hidden text-ellipsis">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.stock > 0 ? (
              <p className="text-green-600 text-sm">In Stock</p>
            ) : (
              <p className="text-red-600 text-sm">Out of Stock</p>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
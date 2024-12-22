import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiPhone } from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';

export const Header: React.FC = () => {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <FiPhone className="mr-2" />
            <span>1-800-555-0123</span>
          </div>
          <div>
            <span className="text-sm">Fast Shipping & Restaurant Equipment Experts</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo.svg" alt="AAR Equipment" className="h-12" />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search 100,000+ products..."
                className="w-full px-4 py-2 border-2 border-blue-600 rounded-lg focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600">
                <FiSearch size={20} />
              </button>
            </div>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center space-x-6">
            <Link to="/login" className="flex items-center text-gray-700 hover:text-blue-600">
              <FiUser size={20} className="mr-2" />
              <span>Account</span>
            </Link>
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-blue-600">
              <div className="relative">
                <FiShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <span className="ml-2">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-600">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 text-white">
            <li>
              <Link to="/products" className="block py-3 px-4 hover:bg-blue-700">
                All Categories
              </Link>
            </li>
            <li>
              <Link to="/products/cooking" className="block py-3 px-4 hover:bg-blue-700">
                Cooking Equipment
              </Link>
            </li>
            <li>
              <Link to="/products/refrigeration" className="block py-3 px-4 hover:bg-blue-700">
                Refrigeration
              </Link>
            </li>
            <li>
              <Link to="/products/food-prep" className="block py-3 px-4 hover:bg-blue-700">
                Food Prep
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
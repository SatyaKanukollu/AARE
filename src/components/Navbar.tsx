import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { FiShoppingCart, FiUser } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/logo.svg" 
              alt="AAR Equipment" 
              className="h-12"
            />
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <Link to="/about" className="hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="flex items-center">
              <FiShoppingCart className="text-xl" />
              {itemCount > 0 && (
                <span className="ml-1 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link to="/login" className="flex items-center gap-2">
              <FiUser className="text-xl" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
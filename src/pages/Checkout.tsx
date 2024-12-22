import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { loadStripe } from '@stripe/stripe-js';
import { CheckoutSteps } from '../components/CheckoutSteps';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export const Checkout: React.FC = () => {
  const { items, total } = useCartStore();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<'cart' | 'shipping' | 'payment' | 'confirmation'>('cart');
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  });

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          items,
          shippingInfo 
        }),
      });

      const session = await response.json();

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        toast.error('Checkout failed');
      }
    } catch (error) {
      toast.error('Checkout failed');
      navigate('/login');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <CheckoutSteps currentStep={currentStep} />
      
      {currentStep === 'cart' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep('shipping')}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Continue to Shipping
          </button>
        </div>
      )}

      {currentStep === 'shipping' && (
        <form onSubmit={handleShippingSubmit} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              required
              className="p-2 border rounded"
              value={shippingInfo.firstName}
              onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="p-2 border rounded"
              value={shippingInfo.lastName}
              onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
            />
            <input
              type="text"
              placeholder="Address"
              required
              className="p-2 border rounded col-span-2"
              value={shippingInfo.address}
              onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
            />
            <input
              type="text"
              placeholder="City"
              required
              className="p-2 border rounded"
              value={shippingInfo.city}
              onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
            />
            <input
              type="text"
              placeholder="State"
              required
              className="p-2 border rounded"
              value={shippingInfo.state}
              onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
            />
            <input
              type="text"
              placeholder="ZIP Code"
              required
              className="p-2 border rounded"
              value={shippingInfo.zipCode}
              onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="p-2 border rounded"
              value={shippingInfo.phone}
              onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Continue to Payment
          </button>
        </form>
      )}

      {currentStep === 'payment' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Pay ${total.toFixed(2)}
          </button>
        </div>
      )}
    </div>
  );
};
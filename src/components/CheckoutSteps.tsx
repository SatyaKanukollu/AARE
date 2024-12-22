import React from 'react';

interface Props {
  currentStep: 'cart' | 'shipping' | 'payment' | 'confirmation';
}

export const CheckoutSteps: React.FC<Props> = ({ currentStep }) => {
  const steps = [
    { id: 'cart', name: 'Shopping Cart' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'payment', name: 'Payment' },
    { id: 'confirmation', name: 'Confirmation' }
  ];

  return (
    <div className="py-4">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep === step.id ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}>
              {index + 1}
            </div>
            <span className="ml-2 text-sm font-medium">{step.name}</span>
            {index < steps.length - 1 && (
              <div className="w-12 h-1 mx-4 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
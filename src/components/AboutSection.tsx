import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About AAR Equipment</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              AAR Equipment has been a leading provider of commercial restaurant equipment since 1961. We specialize in providing high-quality, reliable equipment for restaurants, cafeterias, and food service establishments.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence extends beyond just selling equipment - we provide comprehensive support, installation services, and maintenance guidance to ensure your business runs smoothly.
            </p>
            <h3 className="text-xl font-semibold mb-3">What We Offer:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Premium Commercial Kitchen Equipment</li>
              <li>Expert Installation Services</li>
              <li>Maintenance Support</li>
              <li>Warranty Coverage</li>
              <li>Competitive Pricing</li>
            </ul>
          </div>
          <div>
            <img 
              src="/images/showroom.jpg" 
              alt="AAR Equipment Showroom"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
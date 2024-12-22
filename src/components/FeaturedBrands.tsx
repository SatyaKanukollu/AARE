import React from 'react';

const brands = [
  {
    name: "Vulcan",
    logo: "https://www.aarequipment.com/media/wysiwyg/vulcan-logo.png"
  },
  {
    name: "True",
    logo: "https://www.aarequipment.com/media/wysiwyg/true-logo.png"
  },
  {
    name: "Hobart",
    logo: "https://www.aarequipment.com/media/wysiwyg/hobart-logo.png"
  },
  {
    name: "Globe",
    logo: "https://www.aarequipment.com/media/wysiwyg/globe-logo.png"
  }
];

export const FeaturedBrands: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Brands</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="w-40">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Vulcan VC4GD Gas Convection Oven",
    description: "Professional gas convection oven with enhanced air flow and digital controls.",
    price: 7899.99,
    image_url: "/images/products/vulcan-vc4gd.jpg",
    category: "cooking",
    stock: 5,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "True T-49-HC Refrigerator",
    description: "Energy-efficient commercial refrigerator with hydrocarbon refrigeration system.",
    price: 4995.00,
    image_url: "/images/products/true-t49hc.jpg",
    category: "refrigeration",
    stock: 3,
    featured: true,
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "Hobart AM15VL-2 Dishwasher",
    description: "High-temperature commercial dishwasher with built-in booster heater.",
    price: 12450.00,
    image_url: "/images/products/hobart-am15vl.jpg",
    category: "warewashing",
    stock: 2,
    featured: false,
    created_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Bunn CWTF15-3 Coffee Maker",
    description: "Commercial automatic coffee brewer with three warmers.",
    price: 1299.99,
    image_url: "/images/products/bunn-cwtf15.jpg",
    category: "beverage",
    stock: 8,
    featured: false,
    created_at: new Date().toISOString()
  },
  {
    id: "5",
    name: "Metro 5Q357C Mobile Storage Cart",
    description: "Heavy-duty chrome wire shelving unit with casters.",
    price: 299.99,
    image_url: "/images/products/metro-5q357c.jpg",
    category: "storage",
    stock: 15,
    featured: false,
    created_at: new Date().toISOString()
  },
  {
    id: "6",
    name: "Robot Coupe R2N Food Processor",
    description: "Commercial food processor with 2-quart bowl capacity.",
    price: 1095.00,
    image_url: "/images/products/robot-coupe-r2n.jpg",
    category: "food-prep",
    stock: 10,
    featured: true,
    created_at: new Date().toISOString()
  }
];
export const getCategoryTitle = (slug: string): string => {
  const categoryMap: { [key: string]: string } = {
    'cooking': 'Cooking Equipment',
    'refrigeration': 'Refrigeration',
    'food-prep': 'Food Prep Equipment',
    'warewashing': 'Warewashing',
    'beverage': 'Beverage Equipment',
    'storage': 'Storage & Transport'
  };

  return categoryMap[slug] || 'All Products';
};

export const categoryList = [
  {
    title: "Cooking Equipment",
    slug: "cooking",
    image: "/images/categories/cooking-equipment.jpg"
  },
  {
    title: "Refrigeration",
    slug: "refrigeration",
    image: "/images/categories/refrigeration.jpg"
  },
  {
    title: "Food Prep Equipment",
    slug: "food-prep",
    image: "/images/categories/food-prep.jpg"
  },
  {
    title: "Warewashing",
    slug: "warewashing",
    image: "/images/categories/warewashing.jpg"
  },
  {
    title: "Beverage Equipment",
    slug: "beverage",
    image: "/images/categories/beverage.jpg"
  },
  {
    title: "Storage & Transport",
    slug: "storage",
    image: "/images/categories/storage.jpg"
  }
];
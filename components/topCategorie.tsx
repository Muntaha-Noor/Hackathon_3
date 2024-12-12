import Image from "next/image";
import React from "react";

interface Category {
  name: string;
  image: string;
  productsCount: number;
}

const categories: Category[] = [
  {
    name: "Wing Chair",
    image: "/chair1.png",
    productsCount: 3584,
  },
  {
    name: "Wooden Chair",
    image: "/chair2.png",
    productsCount: 157,
  },
  {
    name: "Desk Chair",
    image: "/chair3.png",
    productsCount: 154,
  },
];

const TopCategories: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-32 py-8 mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={category.image}
              alt={category.name}
              height={424}
              width={424}
              className="w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{category.name}</h3>
              <p className="text-gray-500">{category.productsCount} Products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;

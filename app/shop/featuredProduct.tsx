import Image from "next/image";
import React from "react";

const FeaturedProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Library Black Chair", price: "$99", image: "/chair4.png" },
    { id: 2, name: "Library Stool Chair", price: "$99", image: "/product1.png" },
    { id: 3, name: "Library Black Chair", price: "$99", image: "/chair3.png" },
    { id: 4, name: "Library Black Chair", price: "$99", image: "/product3.png" },
    { id: 5, name: "Library Stool Chair", price: "$99", image: "/chair1.png" },
  ];

  return (
    <div className="px-6 py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">FEATURED PRODUCTS</h1>
        <button className="text-blue-600 font-medium">View all</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <Image
              src={product.image}
              alt={product.name}
              height={312}
              width={312}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-900 font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
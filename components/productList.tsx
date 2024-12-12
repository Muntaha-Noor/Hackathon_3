"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";

const ProductList: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const products = [
    {
      src: "/product1.png",
      alt: "Library Stool Chair",
      price: "$20",
      label: "New",
      labelColor: "bg-green-500",
    },
    {
      src: "/product2.png",
      alt: "Library Stool Chair",
      price: "$20",
      originalPrice: "$30",
      label: "Sales",
      labelColor: "bg-red-500",
    },
    {
      src: "/product3.png",
      alt: "Library Stool Chair",
      price: "$20",
    },
    {
      src: "/product4.png",
      alt: "Library Stool Chair",
      price: "$20",
    },
    {
      src: "/chair1.png",
      alt: "Library Stool Chair",
      price: "$20",
      label: "New",
      labelColor: "bg-green-500",
    },
    {
      src: "/chair.png",
      alt: "Library Stool Chair",
      price: "$20",
      originalPrice: "$30",
      label: "Sales",
      labelColor: "bg-red-500",
    },
    {
      src: "/chair4.png",
      alt: "Library Stool Chair",
      price: "$20",
    },
    {
      src: "/product1.png",
      alt: "Library Stool Chair",
      price: "$20",
    },
  ];

  if (!isClient) return null; // Prevents rendering on the server to avoid mismatch

  return (
    <div className="px-4 sm:px-8 lg:px-32 mx-auto">
      <div className="py-12">
        <h2 className="text-center text-2xl font-semibold mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200"
            >
              {/* Product Label */}
              {product.label && (
                <span
                  className={`absolute top-4 left-4 text-white text-sm font-semibold px-3 py-1 rounded-full ${product.labelColor}`}
                >
                  {product.label}
                </span>
              )}

              {/* Product Image */}
              <Image
                src={product.src}
                alt={product.alt}
                width={200}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />

              {/* Product Details */}
              <div className="mt-4 text-center">
                <h3 className="text-gray-800 text-lg font-medium">
                  {product.alt}
                </h3>
                <div className="flex justify-center items-center mt-2">
                  <span className="text-lg font-semibold text-gray-800">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                {/* Add to Cart Button */}
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <CiShoppingCart className="inline mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

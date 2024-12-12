import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import ProductSection from "./productSection";

const Product: React.FC = () => {
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
      src: "/chair2.png",
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
    {
      src: "/chair1.png",
      alt: "Modern Chair",
      price: "$25",
      label: "Hot",
      labelColor: "bg-yellow-500",
    },
    {
      src: "/product2.png",
      alt: "Elegant Chair",
      price: "$35",
    },
    {
      src: "/product3.png",
      alt: "Luxury Chair",
      price: "$40",
    },
    {
      src: "/chair3.png",
      alt: "Office Chair",
      price: "$50",
      originalPrice: "$60",
      label: "Discount",
      labelColor: "bg-blue-500",
    },
  ];

  return (
    <div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-4 border border-gray-200 group"
            >
              {product.label && (
                <span
                  className={`absolute top-4 left-4 text-white text-sm font-semibold px-3 py-1 rounded-full ${product.labelColor}`}
                >
                  {product.label}
                </span>
              )}

              <Image
                src={product.src}
                alt={product.alt}
                width={312}
                height={312}
                className="w-full h-56 rounded-lg object-cover"
              />

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-gray-800 text-lg font-medium">
                    {product.alt}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-lg font-semibold text-gray-800">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="pb-2">
                  <CiShoppingCart className="hover:text-white hover:bg-primary text-black font-semibold text-4xl cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductSection />
    </div>
  );
};

export default Product;
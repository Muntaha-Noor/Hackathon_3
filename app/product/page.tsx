"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { client } from "@/sanity/lib/client"; 
import ProductSection from "./productSection";

interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  label?: string;
  labelColor?: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"][1...13] {
          _id,
          title,
          price,
          originalPrice,
          "imageUrl": image.asset->url,
          label,
          labelColor
        }`;

        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="px-4 lg:px-[150px] mx-auto">
      <div className="sm:px-6 md:px-8 py-12 mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
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
                src={product.imageUrl}
                alt={product.title}
                width={312}
                height={312}
                className="w-full h-56 rounded-lg object-cover"
              />

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-gray-800 text-lg font-medium">{product.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-lg font-semibold text-gray-800">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <div className="pb-2">
                  <CiShoppingCart className="hover:text-white hover:bg-primary text-black font-semibold text-3xl rounded cursor-pointer transition-colors" />
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

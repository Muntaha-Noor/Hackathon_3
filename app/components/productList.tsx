"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  label?: string;
  labelColor?: string;
  slug: { current: string };
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"][1...9] {
          _id,
          title,
          price,
          originalPrice,
          "imageUrl": image.asset->url,
          label,
          labelColor,
          slug {
            current
          }
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
    <div className="px-4 sm:px-8 lg:px-32 mx-auto">
      <div className="py-12">
        <h2 className="text-center text-2xl font-semibold mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product._id} href={`/product/${product.slug.current}`}>
              <div className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-gray-200">
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
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-lg object-cover"
                />

                <div className="mt-4 text-center">
                  <h3 className="text-gray-800 text-lg font-medium">
                    {product.title}
                  </h3>
                  <div className="flex justify-center items-center mt-2">
                    <span className="text-lg font-semibold text-gray-800">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button className="mt-4 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <CiShoppingCart className="inline mr-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

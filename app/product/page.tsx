"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { client } from "@/sanity/lib/client";
import ProductSection from "./productSection";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  originalPrice?: number;
  imageUrl: string;
  label?: string;
  labelColor?: string;
}

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [productsPerPage] = useState(8); // Number of products per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "products"] {
            _id,
            title,
            slug,
            price,
            originalPrice,
            "imageUrl": image.asset->url,
            label,
            labelColor
          }
        `;

        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (!products.length) return <p>Loading...</p>;

  return (
    <div className="px-4 lg:px-[150px] mx-auto">
      <div className="sm:px-6 md:px-8 py-12 mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
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

              <Link href={`/product/${product.slug.current}`} passHref>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={312}
                  height={312}
                  className="w-full h-56 rounded-lg object-cover"
                />
              </Link>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <Link href={`/product/${product.slug.current}`} passHref>
                    <h3 className="text-gray-800 text-lg font-medium">{product.title}</h3>
                  </Link>

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

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white"
            }`}
          >
            Previous
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-primary"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <ProductSection />
    </div>
  );
};

export default Product;

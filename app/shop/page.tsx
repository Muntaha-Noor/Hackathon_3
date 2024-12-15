"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import FeaturedProducts from "./featuredProduct";
import { CiShoppingCart } from "react-icons/ci";

const LibraryStool: React.FC = () => {
  const router = useRouter();

  return (
    <div className="px-4 sm:px-6 md:px-12 mx-auto">
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <Image
              src="/library-chair.png"
              alt="Library Stool Chair"
              height={500}
              width={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-1/2 md:ml-6 flex flex-col justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Library Stool Chair</h1>
            <p className="text-lg text-white p-2 bg-primary w-32 rounded-lg font-semibold mt-2">
              $20.00 USD
            </p>
            <div className="border-t-2 border-gray-200 mb-4 mt-4" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <button
              className="mt-6 bg-primary hover:bg-teal-600 flex items-center text-white py-2 w-40 px-4 rounded-lg"
              onClick={() => router.push("/card")}
            >
            <CiShoppingCart className="text-white text-3xl pr-2" />  Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default LibraryStool;

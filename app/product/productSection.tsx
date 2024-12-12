import Image from "next/image";
import React from "react";

const ProductSection: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">
          Or Subscribe To The Newsletter
        </h2>
        <form className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Email Address..."
            className="border border-gray-400 px-4 py-2 rounded-md w-full sm:w-80 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded-md mt-4 sm:mt-0 sm:ml-4 hover:bg-gray-700"
          >
            SUBMIT
          </button>
        </form>
      </div>

      <div className="text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {[ 
            "/chair1.png",
            "/chair2.png",
            "/chair3.png",
            "/chair4.png",
            "/product1.png",
            "/product2.png",
          ].map((src, index) => (
            <Image
              key={index}
              src={src}
              height={112}
              width={112}
              alt={`Product ${index + 1}`}
              className="rounded-lg shadow-md w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

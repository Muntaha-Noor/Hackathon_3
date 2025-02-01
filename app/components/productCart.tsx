import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  badge?: string;
}

const ProductCart: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  badge,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={title}
        height={312}
        width={312}
        className="w-full h-56 object-cover sm:h-64 md:h-72 lg:h-80"
      />
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
        </div>
        {badge && (
          <span className="mt-2 inline-block bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCart;

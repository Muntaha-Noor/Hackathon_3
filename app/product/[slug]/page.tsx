"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import FeaturedProduct from "@/app/shop/featuredProduct";

interface Product {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  rating: number;
  totalRatings: number;
  size: string[];
  colors: string[];
}

const ProductDetail: React.FC = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userRating, setUserRating] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "products" && slug.current == $slug][0] {
          title, price, description, "imageUrl": image.asset->url, stock, rating, totalRatings, size, colors
        }`;
        const result: Product = await client.fetch(query, { slug });
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProduct();
  }, [slug]);

  const handleRating = (rating: number) => {
    setUserRating(rating);
  };

  const incrementQuantity = () => {
    if (product?.stock && quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">Loading...</div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-semibold text-gray-600">Product not found!</h1>
      </div>
    );
  }

  return (
    <div>
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={product.imageUrl}
              alt={product.title}
              height={400}
              width={400}
              className="rounded-lg object-cover shadow"
            />
          </div>

          <div className="w-full md:w-1/2 md:ml-6 mt-6 md:mt-0">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <p className="text-lg text-gray-600 mt-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>

            <div className="flex items-center mt-4">
              <span className="text-gray-700 font-medium">Rating:</span>
              <div className="flex ml-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`cursor-pointer text-xl ${
                      star <= userRating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                ({product.totalRatings + userRating} ratings)
              </span>
            </div>

            <div className="mt-4">
              <strong>Size:</strong>
              <div className="flex space-x-2 mt-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "bg-gray-800 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <strong>Color:</strong>
              <div className="flex space-x-2 mt-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                      selectedColor === color ? "border-black" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center border rounded shadow-sm">
                <button
                  className="px-3 py-1 border-r hover:bg-gray-100"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="px-3 py-1 border-l hover:bg-gray-100"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>

              <button
                className="bg-primary text-white py-2 px-6 rounded flex items-center space-x-2 shadow-sm "
                onClick={() => console.log("Add to Cart", quantity)}
              >
                <CiShoppingCart className="text-xl" />
                <span>Add to Cart</span>
              </button>

              <button
                className="bg-primary text-white py-2 px-6 rounded flex items-center shadow-sm "
                onClick={() => console.log("Add to Wishlist")}
              >
                <FaRegHeart />
                <span className="flex items-center">Add to Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

<FeaturedProduct />
</div>
  );
};

export default ProductDetail;

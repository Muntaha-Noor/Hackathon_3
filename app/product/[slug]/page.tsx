"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Swal from "sweetalert2";
import { RootState } from "@/app/store/store";
import { addToCart} from "@/app/store/slices/CartSlice";
import { addToWishlist } from "@/app/store/slices/WishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProduct from "@/app/shop/featuredProduct";

interface Product {
  _id: string;
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
const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlistItems);

const [product, setProduct] = useState<Product | null>(null);
const [loading, setLoading] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "products" && slug.current == $slug][0] {
          _id, title, price, description, "imageUrl": image.asset->url, stock, rating, totalRatings, size, colors
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

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") setQuantity(quantity + 1);
    else if (action === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (!product) return;
  
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        text: "Please select a size and color before adding to cart!",
        icon: "warning",
        timer: 2500,
        showConfirmButton: false,
      });
      return;
    }
  
    const existingItem = cartItems.find(
      (item) =>
        item.id === product._id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );
  
    if (existingItem) {
      if (existingItem.quantity === quantity) {
        Swal.fire({
          text: "Product is already added to cart with same quantity!",
          icon: "info",
          timer: 2500,
          showConfirmButton: false,
        });
      } else {
        dispatch(
          addToCart({
            ...existingItem,
            quantity: existingItem.quantity + quantity,
          })
        );
        Swal.fire({
          text: "Quantity updated!",
          icon: "info",
          timer: 2500,
          showConfirmButton: false,
        });
      }
    } else {
      const cartItem = {
        id: String(product._id),
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
      };
      dispatch(addToCart(cartItem));
      Swal.fire({
        text: `${product.title} added to Cart!`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };
  
const handleWishlistToggle = () => {
  if (product) {
    const isInWishlist = wishlistItems.some((item) => item.id === product._id);

    if (isInWishlist) {
      Swal.fire({
        text: "This product is already in your wishlist!",
        icon: "warning",
        timer: 2500,
        showConfirmButton: false,
      });
    } else {
      dispatch(addToWishlist({ id: product._id, title: product.title, price: product.price, imageUrl: product.imageUrl }));
      Swal.fire({
        text: `${product.title} added to Wishlist!`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  }
};

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found!</div>;

  return (
    <div>
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={product.imageUrl}
              alt={product.title}
              className="rounded-lg object-cover shadow"
              height={400}
              width={400}
            />
          </div>

          <div className="w-full md:w-1/2 md:ml-6 mt-6 md:mt-0">
            <h1 className="text-2xl font-semibold">{product.title}</h1>
            <p className="text-lg text-gray-600 mt-2">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>

            {product.size.length > 0 && (
              <div className="mt-4">
                <h3 className="text-gray-700 font-medium mb-2">Size:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.size.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded ${
                        selectedSize === size ? "bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors.length > 0 && (
              <div className="mt-4">
                <h3 className="text-gray-700 font-medium mb-2">Color:</h3>
                <div className="flex flex-wrap gap-2">
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
            )}

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="px-3 py-1 border rounded-md text-lg"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="px-3 py-1 border rounded-md text-lg"
              >
                +
              </button>
            </div>

            <div className="flex items-center space-x-4 mt-6">
              <button
                className="bg-primary hover:bg-teal-600 flex items-center text-white py-2 px-4 rounded-lg"
                onClick={handleAddToCart}
              >
                <CiShoppingCart className="text-white text-3xl pr-2" /> Add To Cart
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 flex items-center text-white py-2 px-4 rounded-lg"
                onClick={handleWishlistToggle}
              >
                <AiOutlineHeart className="text-white text-3xl pr-2" /> Wishlist
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

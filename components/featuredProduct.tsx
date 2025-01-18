"use client"
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  imageUrl: string;
  description: string;
  badge: string | null;
  tags: string[];
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const query = `*[_type == "products" && "featured" in tags][0...4] {
          _id,
          title,
          price,
          priceWithoutDiscount,
          badge,
          "imageUrl": image.asset->url,
          description,
          tags
        }`;

        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setLoading(false); 
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading Featured Products...</div>; 
  }

  return (
    <div className="px-4 lg:px-32 mx-auto">
      <div className="py-10 bg-gray-50 px-4 sm:px-8 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative bg-white shadow-lg p-4 rounded-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={312}
                height={312}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-black font-bold">${product.price}</p>
              {product.priceWithoutDiscount && (
                <p className="text-gray-400 line-through">
                  ${product.priceWithoutDiscount}
                </p>
              )}
              {product.badge && (
                <span
                  className="absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded"
                  style={{
                    backgroundColor:
                      product.badge === "New" ? "green" : product.badge === "Sale" ? "red" : "gray",
                  }}
                >
                  {product.badge}
                </span>
              )}
              <div className="absolute bottom-2 right-2">
                <CiShoppingCart className="text-3xl text-gray-600 hover:text-white hover:bg-primary rounded-full p-1 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

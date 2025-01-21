import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; 
import Link from "next/link"; 

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  slug: string; 
}

const FeaturedProduct: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products" && defined(slug.current)] | order(_createdAt desc)[0...5] {
          _id,
          title,
          price,
          "imageUrl": image.asset->url,
          "slug": slug.current // Fetch slug.current directly as a string
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
    <div className="px-6 py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">FEATURED PRODUCTS</h1>
        <button className="text-blue-600 font-medium">View all</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {products.map((product) => (
          <div key={product._id} className="text-center">
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                height={312}
                width={312}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-900 font-bold">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;

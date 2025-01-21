"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";  
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  slug: { current: string }; 
  imageUrl: string;
  tags: string[];
}

const ProductStyle = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"][4...8] {
          _id,
          title,
          slug,
          "imageUrl": image.asset->url,
          tags
        }`;

        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) return <p>Loading...</p>; 

  return (
    <div>
      <section className="flex flex-col justify-center md:flex-row items-center gap-6 p-6">
        <div className="flex flex-col items-center">
          <div className="mt-6">
            <Link href={`/product/${products[0]?.slug.current}`}>
              <Image
                src={products[0]?.imageUrl || "/product3.png"} 
                alt="Large Chair"
                width={550}
                height={500}
                className="rounded-md"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product._id}>
              <Link href={`/product/${product.slug.current}`}>
                <Image
                  src={product.imageUrl || "/product4.png"}
                  alt={product.title}
                  height={250}
                  width={250}
                  className="rounded-md"
                />
                <h3 className="text-center mt-2 text-lg font-semibold">{product.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductStyle;

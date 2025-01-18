"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Product {
  _id: string;
  title: string;
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

  return (
    <div>
      <section className="flex flex-col justify-center md:flex-row items-center gap-6 p-6">
        <div className="flex flex-col items-center">
          <div className="mt-6">
            <Image
              src={products[0]?.imageUrl || "/product3.png"} // Default image if not available
              alt="Large Chair"
              width={550}
              height={500}
              className="rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div key={index}>
              <Image
                src={product.imageUrl || "/product4.png"} 
                alt={product.title}
                height={250}
                width={250}
                className="rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductStyle;

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
    <div className="max-w-screen-2xl mx-auto p-6">
      <section className="lg:px-32">
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-8">
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

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:w-1/2 lg:gap-x-4">
            {products.map((product) => (
              <div key={product._id} className="flex justify-center">
                <Link href={`/product/${product.slug.current}`}>
                  <Image
                    src={product.imageUrl || "/product4.png"}
                    alt={product.title}
                    height={250}
                    width={250}
                    className="rounded-md"
                  />
                  <h3 className="text-center mt-2 text-lg font-semibold">
                    {product.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductStyle;

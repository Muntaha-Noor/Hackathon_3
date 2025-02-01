"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  imageUrl: string;
  products: number;
}

const TopCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "categories"] {
        _id,
        title,
        "slug": slug.current,  // Fetch slug for dynamic routing
        "imageUrl": image.asset->url,
        products
      }`;
      const sanityCategories: Category[] = await client.fetch(query);
      setCategories(sanityCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="px-4 sm:px-8 lg:px-32 py-8 mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/categories/${category.slug}`}>
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  height={424}
                  width={424}
                  className="w-full object-cover"
                />
              </Link>

              <div className="p-4 text-center">
                <h3 className="text-lg font-medium">{category.title}</h3>
                <p className="text-gray-500">{category.products} Products</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No categories available.
          </p>
        )}
      </div>
    </div>
  );
};

export default TopCategories;

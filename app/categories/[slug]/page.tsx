"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";

interface Category {
  title: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  priority: number;
  relatedProducts: { title: string; slug: string }[];
  tags: string[];
}

const CategoryDetail: React.FC = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const query = `*[_type == "categories" && slug.current == $slug][0] {
          title,
          description,
          "imageUrl": image.asset->url,
          featured,
          priority,
          "relatedProducts": relatedProducts[]->{title, "slug": slug.current},
          tags
        }`;
        const result: Category = await client.fetch(query, { slug });
        setCategory(result);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCategory();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!category) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl font-semibold text-gray-600">
          Category not found!
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
        {/* Category Details */}
        <div className="flex flex-col md:flex-row">
          {/* Category Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={category.imageUrl}
              alt={category.title}
              height={400}
              width={400}
              className="rounded-lg object-cover shadow"
            />
          </div>

          {/* Category Info */}
          <div className="w-full md:w-1/2 md:ml-6 mt-6 md:mt-0">
            <h1 className="text-2xl font-semibold">{category.title}</h1>
            <p className="text-lg text-gray-600 mt-2">{category.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Featured: {category.featured ? "Yes" : "No"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Priority: {category.priority}
            </p>

            {/* Tags */}
            <div className="mt-4">
              <strong>Tags:</strong>
              <div className="flex flex-wrap mt-2 gap-2">
                {category.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Products */}
            {category.relatedProducts?.length > 0 && (
              <div className="mt-4">
                <strong>Related Products:</strong>
                <ul className="mt-2 space-y-1">
                  {category.relatedProducts.map((product, index) => (
                    <li
                      key={index}
                      className="text-blue-500 hover:underline cursor-pointer"
                      onClick={() =>
                        console.log(`Redirect to product: ${product.slug}`)
                      }
                    >
                      {product.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;

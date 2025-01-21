// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   title: string;
//   imageUrl: string;
// }

// const ProductSection: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]); 

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         *[_type == "products" && "instagram" in tags][1...7] {
//           _id,
//           title,
//           "imageUrl": image.asset->url
//         }
//       `;
//       const sanityProducts: Product[] = await client.fetch(query);
//       setProducts(sanityProducts);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-semibold text-gray-800">
//           Or Subscribe To The Newsletter
//         </h2>
//         <form className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
//           <input
//             type="email"
//             placeholder="Email Address..."
//             className="border border-gray-400 px-4 py-2 rounded-md w-full sm:w-80 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-gray-800 text-white px-6 py-2 rounded-md mt-4 sm:mt-0 sm:ml-4 hover:bg-gray-700"
//           >
//             SUBMIT
//           </button>
//         </form>
//       </div>

//       <div className="text-center">
//         <h2 className="text-4xl font-semibold text-gray-800 mb-4">
//           Follow Products And Discounts On Instagram
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <Image
//                 key={product._id}
//                 src={product.imageUrl}
//                 height={112}
//                 width={112}
//                 alt={product.title || "Product"}
//                 className="rounded-lg shadow-md w-full"
//               />
//             ))
//           ) : (
//             <p className="text-gray-500 text-lg">No products available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;

























// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link"; // Import Link for dynamic routing

// interface Product {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   slug: string; // Add slug property to Product interface
// }

// const ProductSection: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         *[_type == "products" && "instagram" in tags][1...7] {
//           _id,
//           title,
//           "imageUrl": image.asset->url,
//           slug
//         }
//       `;
//       const sanityProducts: Product[] = await client.fetch(query);
//       setProducts(sanityProducts);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-semibold text-gray-800">
//           Or Subscribe To The Newsletter
//         </h2>
//         <form className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
//           <input
//             type="email"
//             placeholder="Email Address..."
//             className="border border-gray-400 px-4 py-2 rounded-md w-full sm:w-80 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-gray-800 text-white px-6 py-2 rounded-md mt-4 sm:mt-0 sm:ml-4 hover:bg-gray-700"
//           >
//             SUBMIT
//           </button>
//         </form>
//       </div>

//       <div className="text-center">
//         <h2 className="text-4xl font-semibold text-gray-800 mb-4">
//           Follow Products And Discounts On Instagram
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <Link key={product._id} href={`/product/${product.slug.current}`} passHref>
                
//                   <Image
//                     src={product.imageUrl}
//                     height={112}
//                     width={112}
//                     alt={product.title || "Product"}
//                     className="rounded-lg shadow-md w-full"
//                   />
                
//               </Link>
//             ))
//           ) : (
//             <p className="text-gray-500 text-lg">No products available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;

































// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// interface Product {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   slug: string; // Slug is a string
// }

// const ProductSection: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         *[_type == "products" && "instagram" in tags][1...7] {
//           _id,
//           title,
//           "imageUrl": image.asset->url,
//           "slug": slug.current
//         }
//       `;
//       const sanityProducts: Product[] = await client.fetch(query);
//       setProducts(sanityProducts);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-semibold text-gray-800">
//           Follow Products And Discounts On Instagram
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <Link key={product._id} href={`/product/${product.slug}`} passHref>
//                 <Image
//                   src={product.imageUrl}
//                   height={112}
//                   width={112}
//                   alt={product.title || "Product"}
//                   className="rounded-lg shadow-md w-full"
//                 />
//               </Link>
//             ))
//           ) : (
//             <p className="text-gray-500 text-lg">No products available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;


















































// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// interface Product {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   slug: string;
// }

// const ProductSection: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         *[_type == "products" && "instagram" in tags][1...7] {
//           _id,
//           title,
//           "imageUrl": image.asset->url,
//           "slug": slug.current
//         }
//       `;
//       const sanityProducts: Product[] = await client.fetch(query);
//       setProducts(sanityProducts);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
//       {/* Newsletter Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-semibold text-gray-800">
//           Or Subscribe To The Newsletter
//         </h2>
//         <form className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
//           <input
//             type="email"
//             placeholder="Email Address..."
//             className="border border-gray-400 px-4 py-2 rounded-md w-full sm:w-80 focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-gray-800 text-white px-6 py-2 rounded-md mt-4 sm:mt-0 sm:ml-4 hover:bg-gray-700"
//           >
//             SUBMIT
//           </button>
//         </form>
//       </div>

//       {/* Products Section */}
//       <div className="text-center">
//         <h2 className="text-4xl font-semibold text-gray-800 mb-4">
//           Follow Products And Discounts On Instagram
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
//           {products.length > 0 ? (
//             products.map((product) => (
//               <Link key={product._id} href={`/product/${product.slug}`} passHref>
//                 <Image
//                   src={product.imageUrl}
//                   height={112}
//                   width={112}
//                   alt={product.title || "Product"}
//                   className="rounded-lg shadow-md w-full"
//                 />
//               </Link>
//             ))
//           ) : (
//             <p className="text-gray-500 text-lg">No products available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;























"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  slug: string;
}

const ProductSection: React.FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null); // Null as initial state

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "products" && "instagram" in tags][1...7] {
          _id,
          title,
          "imageUrl": image.asset->url,
          "slug": slug.current
        }
      `;
      const sanityProducts: Product[] = await client.fetch(query);
      setProducts(sanityProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {products === null ? ( // Display loading state
            <p className="text-gray-500 text-lg">Loading products...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <Link key={product._id} href={`/product/${product.slug}`} passHref>
                <Image
                  src={product.imageUrl}
                  height={112}
                  width={112}
                  alt={product.title || "Product"}
                  className="rounded-lg shadow-md w-full"
                />
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-lg">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

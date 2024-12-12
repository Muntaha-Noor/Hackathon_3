import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      image: "/product1.png",
      title: "Library Stool Chair",
      price: "20",
      badge: { label: "New", color: "green" },
    },
    {
      image: "/product2.png",
      title: "Library Stool Chair",
      price: "20",
      originalPrice: "30",
      badge: { label: "Sale", color: "red" },
    },
    {
      image: "/product3.png",
      title: "Library Stool Chair",
      price: "20",
    },
    {
      image: "/product4.png",
      title: "Library Stool Chair",
      price: "20",
    },
  ];

  return (
    <div className="px-4 lg:px-32 mx-auto">
      <div className="py-10 bg-gray-50 px-4 sm:px-8 mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg p-4 rounded-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={312}
                height={312}
                className="w-full h-auto rounded-md"
              />
              <h3 className="text-lg font-bold mt-2">{product.title}</h3>
              <p className="text-black font-bold">${product.price}</p>
              {product.originalPrice && (
                <p className="text-gray-400 line-through">
                  ${product.originalPrice}
                </p>
              )}
              {product.badge && (
                <span
                  className="absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded"
                  style={{ backgroundColor: product.badge.color }}
                >
                  {product.badge.label}
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

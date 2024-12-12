import React from "react";
import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa";

const CartPage: React.FC = () => {
  const items = [
    {
      id: 1,
      name: "Library Stool Chair",
      color: "Ashen Slate / Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/product3.png",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      color: "Ashen Slate / Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/chair1.png",
    },
  ];

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="px-4 lg:px-[150px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between p-6 gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Bag</h1>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">{item.color}</p>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-lg font-bold">MRP: ${item.price}</p>
                <div className="flex gap-2">
                  <button>
                    <FaHeart className="text-gray-500 hover:text-red-500" />
                  </button>
                  <button>
                    <FaTrash className="text-gray-500 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="bg-gray-100 p-6 rounded-lg space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="flex justify-between border-t pt-4">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">${subtotal.toFixed(2)}</p>
            </div>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

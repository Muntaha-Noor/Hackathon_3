"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { removeFromCart } from "@/app/store/slices/CartSlice";
import Image from "next/image";
import { FaHeart, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import {loadStripe} from '@stripe/stripe-js';

interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
  size: string | undefined;
  color: string | undefined;
  quantity: number;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY! as string);


const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleRemove = (item: CartItem) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result: { isConfirmed: boolean }) => {
      if (result.isConfirmed) {
        dispatch(
          removeFromCart({
            id: item.id,
            size: item.size ?? "",
            color: item.color ?? "",
          }),
        );
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      }
    });
  };

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
  
      const session = await response.json();
      console.log("Checkout Session:", session); 
  
      if (session.error) {
        alert("Error: " + session.error);
        return;
      }
  
      if (stripe && session.id) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error("Stripe object ya session ID nahi mila.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };
  
  

  return (
    <div className="px-4 lg:px-[150px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between p-6 gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Bag</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id + item.size + item.color}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={item.imageUrl ?? "/placeholder-image.jpg"}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-1">
                      <p className="text-gray-500">Size: {item.size}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500">Color:</p>
                        <div
                          className="w-5 h-5 rounded-full border"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-2">
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                      <div className="flex gap-2">
                        <button>
                          <FaHeart className="text-black hover:text-red-500" />
                        </button>
                        <button onClick={() => handleRemove(item as CartItem)}>
                          <FaTrash className="text-black hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-bold sm:ml-auto mt-2 sm:mt-0">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))
          )}
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
            <button
      onClick={handleCheckout}
      className="w-full bg-primary text-white font-bold py-3 rounded-lg">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

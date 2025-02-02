"use client";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const cartCount = useSelector(
    (state: RootState) => state.cart.cartItems.length
  );
  const wishlistCount = useSelector(
    (state: RootState) => state.wishlist.wishlistItems.length
  );

  return (
    <header className="text-black w-full pt-4 pb-4 font-semibold bg-[#F0F2F3] flex items-center">
      <div className="mx-auto flex justify-between items-center w-full max-w-[1200px] px-4">
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
          <a className="flex items-center gap-2">
            <Image
              alt="logo"
              height={50}
              width={50}
              src={"/logo.png"}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            />
            <span className="text-2xl sm:text-3xl md:text-4xl">Comforty</span>
          </a>
        </div>

        <div className="hidden sm:block">
          <SearchBar />
        </div>

        <div className="hidden sm:flex items-center gap-3 bg-white p-2 sm:p-3 md:px-6 lg:px-8 rounded-xl">
          <SignedIn>
            <Link href="/wishlist" className="flex items-center gap-1">
              <FaRegHeart className="h-6 w-6" />
              <span className="bg-primary text-white p-1 rounded-full h-6 w-6 flex items-center justify-center text-sm">
                {wishlistCount}
              </span>
            </Link>

            <Link href="/card" className="flex items-center gap-1">
              <MdOutlineShoppingCart className="h-6 w-6" />
              <span className="bg-primary text-white p-1 rounded-full h-6 w-6 flex items-center justify-center text-sm">
                {cartCount}
              </span>
            </Link>

            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;

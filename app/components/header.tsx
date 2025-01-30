"use client"
import Image from 'next/image';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import SearchBar from './SearchBar';
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";

const Header = () => {
    const cartCount = useSelector((state: RootState) => state.cart.cartItems.length);
const wishlistCount = useSelector((state: RootState) => state.wishlist.wishlistItems.length);

  return (
    <header className='text-black w-full pt-[20px] pb-[20px] font-semibold bg-[#F0F2F3] flex items-center'>
      <div className="mx-auto flex flex-wrap justify-between items-center w-full max-w-[1200px] px-5">
        
        <a className="flex items-center ml-20 mb-4">
          <Image alt='logo' height={50} width={50} src={"/logo.png"} />
          <span className="ml-3 text-4xl sm:text-3xl">Comforty</span>
        </a>
        
        <div className="hidden sm:block">
          <SearchBar />
        </div>

        <div className="flex sm:w-32 sm:h-12 gap-3 rounded-xl mr-20 bg-white p-2 sm:p-3 md:pr-14 justify-between items-center sm:ml-4">
          <div className="flex items-center gap-1">
            <FaRegHeart className='h-6 w-6 sm:h-6 sm:w-6' />
            <span className='bg-primary text-white p-1 rounded-full h-6 w-6 sm:h-6 sm:w-6 flex items-center justify-center'>
              {wishlistCount}
            </span>
          </div>

            <Link href="/card"> 
          <div className="flex items-center gap-1">
            <MdOutlineShoppingCart className='h-6 w-6 sm:h-6 sm:w-6' />
            <span className='bg-primary text-white p-1 rounded-full h-6 w-6 sm:h-6 sm:w-6 flex items-center justify-center'>
              {cartCount}
            </span>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
